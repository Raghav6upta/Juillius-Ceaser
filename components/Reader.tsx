
import React from 'react';
import { Scene, PlayItem, AppState } from '../types';
import { Bookmark, Star } from 'lucide-react';

interface ReaderProps {
  scene: Scene;
  state: AppState;
  onLineClick: (line: PlayItem) => void;
  onToggleBookmark: (lineId: string) => void;
  searchQuery: string;
}

const Reader: React.FC<ReaderProps> = ({ scene, state, onLineClick, onToggleBookmark, searchQuery }) => {
  const [hoveredLineId, setHoveredLineId] = React.useState<string | null>(null);

  const filteredContent = React.useMemo(() => {
    if (!searchQuery) return scene.content;
    const lowerQuery = searchQuery.toLowerCase();
    return scene.content.filter(item => 
      item.text.toLowerCase().includes(lowerQuery) || 
      (item.speaker && item.speaker.toLowerCase().includes(lowerQuery))
    );
  }, [scene.content, searchQuery]);

  return (
    <div className="flex-1 h-full overflow-y-auto px-6 md:px-12 py-16 max-w-4xl mx-auto scroll-smooth custom-scrollbar">
      <div className="mb-12 text-center">
        <h2 className="text-stone-400 dark:text-stone-500 text-sm font-semibold tracking-widest uppercase mb-2">Act {state.currentAct}, Scene {scene.number}</h2>
        <h1 className="text-3xl md:text-4xl font-serif font-bold dark:text-stone-100 leading-tight mb-4">
          {scene.title}
        </h1>
        {scene.setting && (
          <p className="text-stone-500 dark:text-stone-400 font-serif italic text-lg max-w-lg mx-auto">
            {scene.setting}
          </p>
        )}
        <div className="h-1 w-12 bg-amber-500 mx-auto mt-8"></div>
      </div>

      <div className="space-y-6 pb-20">
        {filteredContent.map((item) => {
          const isDialogue = item.type === 'dialogue';
          const isSelected = state.selectedLineId === item.id;
          const isBookmarked = state.bookmarks.includes(item.id);
          const shouldHighlight = state.showExamTips && item.isImportant;

          if (!isDialogue) {
            return (
              <div key={item.id} className="py-4 px-6 text-center">
                <span className="text-stone-500 dark:text-stone-500 italic font-serif text-sm">
                  {item.text}
                </span>
              </div>
            );
          }

          return (
            <div 
              key={item.id}
              className={`group relative transition-all duration-300 rounded-xl p-4 -mx-4 cursor-pointer
                ${isSelected ? 'bg-amber-50 dark:bg-amber-900/20 shadow-sm ring-1 ring-amber-200 dark:ring-amber-800' : 'hover:bg-white dark:hover:bg-stone-900 hover:shadow-md'}
                ${shouldHighlight ? 'ring-2 ring-yellow-400/50 bg-yellow-50/30 dark:bg-yellow-900/10' : ''}
              `}
              onClick={() => onLineClick(item)}
              onMouseEnter={() => setHoveredLineId(item.id)}
              onMouseLeave={() => setHoveredLineId(null)}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-stone-400 dark:text-stone-500">
                  {item.speaker}
                </span>
                
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.isImportant && (
                    <span title="Key Quote" className="text-yellow-500">
                      <Star size={14} fill="currentColor" />
                    </span>
                  )}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(item.id);
                    }}
                    className={`${isBookmarked ? 'text-amber-600' : 'text-stone-300 dark:text-stone-600 hover:text-amber-500'}`}
                  >
                    <Bookmark size={14} fill={isBookmarked ? "currentColor" : "none"} />
                  </button>
                </div>
              </div>

              <p className={`text-lg md:text-xl font-serif leading-relaxed dark:text-stone-200 ${isSelected ? 'text-amber-950' : 'text-stone-800'}`}>
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reader;
