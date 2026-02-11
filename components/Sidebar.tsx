
import React from 'react';
import { Act, Play } from '../types';
import { ChevronRight, ChevronDown, BookOpen } from 'lucide-react';

interface SidebarProps {
  play: Play;
  currentAct: number;
  currentScene: number;
  onNavigate: (act: number, scene: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ play, currentAct, currentScene, onNavigate }) => {
  const [expandedActs, setExpandedActs] = React.useState<number[]>([1]);

  const toggleAct = (actNum: number) => {
    setExpandedActs(prev => 
      prev.includes(actNum) ? prev.filter(a => a !== actNum) : [...prev, actNum]
    );
  };

  return (
    <div className="w-64 h-full border-r border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 flex flex-col overflow-y-auto overflow-x-hidden">
      <div className="p-6 border-b border-stone-100 dark:border-stone-900">
        <h1 className="text-xl font-bold font-serif text-amber-900 dark:text-amber-500 flex items-center gap-2">
          <BookOpen size={20} />
          Caesar Companion
        </h1>
      </div>
      
      <nav className="flex-1 p-4 space-y-4">
        {play.acts.map((act) => (
          <div key={act.id} className="space-y-1">
            <button
              onClick={() => toggleAct(act.number)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
            >
              <span className="flex items-center gap-2">
                Act {act.number}
              </span>
              {expandedActs.includes(act.number) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>
            
            {expandedActs.includes(act.number) && (
              <div className="ml-4 space-y-1 border-l border-stone-100 dark:border-stone-800">
                {act.scenes.map((scene) => (
                  <button
                    key={scene.id}
                    onClick={() => onNavigate(act.number, scene.number)}
                    className={`w-full text-left px-4 py-2 text-xs rounded-r-lg transition-all ${
                      currentAct === act.number && currentScene === scene.number
                        ? 'bg-amber-50 text-amber-900 border-l-2 border-amber-500 dark:bg-amber-900/20 dark:text-amber-400 font-medium'
                        : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                    }`}
                  >
                    Scene {scene.number}: {scene.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      
      <div className="p-4 bg-stone-50 dark:bg-stone-900 m-4 rounded-xl">
        <p className="text-[10px] uppercase tracking-wider text-stone-400 dark:text-stone-500 font-bold mb-1">Status</p>
        <p className="text-xs text-stone-600 dark:text-stone-300">Studying Act {currentAct}, Scene {currentScene}</p>
      </div>
    </div>
  );
};

export default Sidebar;
