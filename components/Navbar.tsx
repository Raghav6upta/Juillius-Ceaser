
import React from 'react';
import { Search, Moon, Sun, GraduationCap, Microscope, Sparkles, Bookmark } from 'lucide-react';
import { AppState, StudyMode } from '../types';

interface NavbarProps {
  state: AppState;
  onThemeToggle: () => void;
  onModeChange: (mode: StudyMode) => void;
  onToggleExamTips: () => void;
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ state, onThemeToggle, onModeChange, onToggleExamTips, onSearch }) => {
  return (
    <header className="h-16 border-b border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
          <input
            type="text"
            placeholder="Search lines, characters, or themes..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-stone-100 dark:bg-stone-900 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-amber-500 transition-all dark:text-stone-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Study Mode Toggles */}
        <div className="flex items-center bg-stone-100 dark:bg-stone-900 p-1 rounded-full">
          <button 
            onClick={() => onModeChange('student')}
            title="Student Mode (Simple)"
            className={`p-1.5 rounded-full transition-all ${state.studyMode === 'student' ? 'bg-white dark:bg-stone-800 shadow-sm text-amber-600' : 'text-stone-400 hover:text-stone-600'}`}
          >
            <GraduationCap size={18} />
          </button>
          <button 
            onClick={() => onModeChange('normal')}
            title="Academic Mode"
            className={`p-1.5 rounded-full transition-all ${state.studyMode === 'normal' ? 'bg-white dark:bg-stone-800 shadow-sm text-amber-600' : 'text-stone-400 hover:text-stone-600'}`}
          >
            <Sparkles size={18} />
          </button>
          <button 
            onClick={() => onModeChange('depth')}
            title="Depth Mode (Advanced)"
            className={`p-1.5 rounded-full transition-all ${state.studyMode === 'depth' ? 'bg-white dark:bg-stone-800 shadow-sm text-amber-600' : 'text-stone-400 hover:text-stone-600'}`}
          >
            <Microscope size={18} />
          </button>
        </div>

        <button 
          onClick={onToggleExamTips}
          className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${state.showExamTips ? 'bg-yellow-100 text-yellow-700 ring-1 ring-yellow-400 shadow-sm' : 'bg-stone-100 dark:bg-stone-900 text-stone-500 hover:bg-stone-200'}`}
        >
          Exam Tips
        </button>

        <div className="w-px h-6 bg-stone-200 dark:bg-stone-800 hidden md:block"></div>

        <button 
          onClick={onThemeToggle}
          className="p-2 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-full transition-colors"
        >
          {state.isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
