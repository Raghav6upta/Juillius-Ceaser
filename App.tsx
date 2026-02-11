
import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Reader from './components/Reader';
import Navbar from './components/Navbar';
import AnalysisPanel from './components/AnalysisPanel';
import { playData } from './data/playData';
import { AppState, StudyMode, PlayItem } from './types';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('caesar-companion-state');
    const initial = saved ? JSON.parse(saved) : {
      currentAct: 1,
      currentScene: 1,
      selectedLineId: null,
      bookmarks: [],
      isDarkMode: false,
      studyMode: 'normal',
      showExamTips: false,
    };
    return initial;
  });

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('caesar-companion-state', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (state.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.isDarkMode]);

  const currentSceneData = useMemo(() => {
    const act = playData.acts.find(a => a.number === state.currentAct);
    return act?.scenes.find(s => s.number === state.currentScene) || playData.acts[0].scenes[0];
  }, [state.currentAct, state.currentScene]);

  const selectedLine = useMemo(() => {
    if (!state.selectedLineId) return null;
    return currentSceneData.content.find(l => l.id === state.selectedLineId) || null;
  }, [state.selectedLineId, currentSceneData]);

  const lineContext = useMemo(() => {
    if (!state.selectedLineId) return '';
    const idx = currentSceneData.content.findIndex(l => l.id === state.selectedLineId);
    const start = Math.max(0, idx - 2);
    const end = Math.min(currentSceneData.content.length, idx + 3);
    return currentSceneData.content.slice(start, end)
      .map(l => l.type === 'dialogue' ? `${l.speaker}: ${l.text}` : `[${l.text}]`)
      .join(' ');
  }, [state.selectedLineId, currentSceneData]);

  const handleNavigate = (act: number, scene: number) => {
    setState(prev => ({ ...prev, currentAct: act, currentScene: scene, selectedLineId: null }));
  };

  const handleLineClick = (line: PlayItem) => {
    if (line.type === 'direction') return; // Don't analyze simple directions for now
    setState(prev => ({ ...prev, selectedLineId: line.id }));
  };

  const toggleBookmark = (lineId: string) => {
    setState(prev => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(lineId)
        ? prev.bookmarks.filter(id => id !== lineId)
        : [...prev.bookmarks, lineId]
    }));
  };

  return (
    <div className="flex h-screen bg-stone-50 dark:bg-stone-950 transition-colors duration-300 overflow-hidden font-sans">
      <Sidebar 
        play={playData} 
        currentAct={state.currentAct} 
        currentScene={state.currentScene} 
        onNavigate={handleNavigate} 
      />
      
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <Navbar 
          state={state}
          onThemeToggle={() => setState(prev => ({ ...prev, isDarkMode: !prev.isDarkMode }))}
          onModeChange={(mode) => setState(prev => ({ ...prev, studyMode: mode }))}
          onToggleExamTips={() => setState(prev => ({ ...prev, showExamTips: !prev.showExamTips }))}
          onSearch={setSearchQuery}
        />
        
        <div className="flex-1 overflow-hidden">
          <Reader 
            scene={currentSceneData}
            state={state}
            onLineClick={handleLineClick}
            onToggleBookmark={toggleBookmark}
            searchQuery={searchQuery}
          />
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 md:hidden z-30">
           <button 
             onClick={() => setState(prev => ({ ...prev, showExamTips: !prev.showExamTips }))}
             className={`p-4 rounded-full shadow-lg flex items-center gap-2 font-bold text-xs ${state.showExamTips ? 'bg-yellow-400 text-yellow-950' : 'bg-white dark:bg-stone-900 text-stone-600'}`}
           >
             Tips {state.showExamTips ? 'ON' : 'OFF'}
           </button>
        </div>

        {state.selectedLineId && (
          <div 
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-[2px] z-40 md:hidden"
            onClick={() => setState(prev => ({ ...prev, selectedLineId: null }))}
          />
        )}

        {/* Removed 'as any' as the line prop now correctly expects PlayItem | null */}
        <AnalysisPanel 
          line={selectedLine} 
          context={lineContext}
          mode={state.studyMode}
          onClose={() => setState(prev => ({ ...prev, selectedLineId: null }))}
        />
      </main>
    </div>
  );
};

export default App;
