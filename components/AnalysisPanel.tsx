
import React from 'react';
import { PlayItem, LineAnalysis, StudyMode } from '../types';
import { X, Sparkles, Book, Target, Heart, History, Award } from 'lucide-react';
import { getLineAnalysis } from '../services/geminiService';

interface AnalysisPanelProps {
  // Fix: Use PlayItem instead of non-existent Line type
  line: PlayItem | null;
  context: string;
  mode: StudyMode;
  onClose: () => void;
}

const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ line, context, mode, onClose }) => {
  const [analysis, setAnalysis] = React.useState<LineAnalysis | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (line) {
      setLoading(true);
      setAnalysis(null);
      getLineAnalysis(line, context, mode).then(data => {
        setAnalysis(data);
        setLoading(false);
      });
    }
  }, [line, mode]);

  if (!line) return null;

  return (
    <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-white dark:bg-stone-950 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out border-l border-stone-200 dark:border-stone-800 overflow-y-auto ${line ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="sticky top-0 bg-white/80 dark:bg-stone-950/80 backdrop-blur-md z-10 p-6 flex items-center justify-between border-b border-stone-100 dark:border-stone-900">
        <div className="flex items-center gap-2">
          <Sparkles className="text-amber-500" size={20} />
          <h3 className="font-bold text-lg dark:text-stone-100">AI Analysis</h3>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-full transition-colors">
          <X size={20} className="dark:text-stone-400" />
        </button>
      </div>

      <div className="p-8 space-y-8">
        <section>
          <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-2">{line.speaker} said:</p>
          <p className="text-xl font-serif italic text-stone-900 dark:text-stone-100 leading-snug">"{line.text}"</p>
        </section>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-8 h-8 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>
            <p className="text-sm text-stone-400 animate-pulse">Summoning scholarly wisdom...</p>
          </div>
        ) : analysis ? (
          <div className="space-y-6">
            <AnalysisItem 
              icon={<Book className="text-blue-500" size={18} />}
              title="Modern Translation"
              content={analysis.translation}
            />
            <AnalysisItem 
              icon={<Target className="text-red-500" size={18} />}
              title="Character Intent"
              content={analysis.intent}
            />
            <AnalysisItem 
              icon={<Heart className="text-pink-500" size={18} />}
              title="Emotional Tone"
              content={analysis.tone}
            />
            <AnalysisItem 
              icon={<Sparkles className="text-purple-500" size={18} />}
              title="Literary Devices"
              content={analysis.symbolism}
            />
            {analysis.historicalContext && (
              <AnalysisItem 
                icon={<History className="text-stone-500" size={18} />}
                title="Historical Context"
                content={analysis.historicalContext}
              />
            )}
            <AnalysisItem 
              icon={<Award className="text-amber-600" size={18} />}
              title="Why This Matters"
              content={analysis.examSignificance}
              highlight
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

interface AnalysisItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  highlight?: boolean;
}

const AnalysisItem: React.FC<AnalysisItemProps> = ({ icon, title, content, highlight }) => (
  <div className={`p-4 rounded-xl transition-all ${highlight ? 'bg-amber-50 dark:bg-amber-900/20 ring-1 ring-amber-100 dark:ring-amber-900' : 'bg-stone-50 dark:bg-stone-900/50'}`}>
    <div className="flex items-center gap-2 mb-2">
      {icon}
      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">{title}</h4>
    </div>
    <p className="text-sm leading-relaxed text-stone-800 dark:text-stone-200">{content}</p>
  </div>
);

export default AnalysisPanel;
