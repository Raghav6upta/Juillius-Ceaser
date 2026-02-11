
export interface PlayItem {
  id: string;
  type: 'dialogue' | 'direction';
  speaker?: string;
  text: string;
  isImportant?: boolean;
}

export interface Scene {
  id: string;
  title: string;
  number: number;
  setting?: string;
  content: PlayItem[];
}

export interface Act {
  id: string;
  number: number;
  scenes: Scene[];
}

export interface Play {
  title: string;
  acts: Act[];
}

export interface LineAnalysis {
  translation: string;
  intent: string;
  tone: string;
  symbolism: string;
  historicalContext?: string;
  examSignificance: string;
}

export type StudyMode = 'normal' | 'student' | 'depth';

export interface AppState {
  currentAct: number;
  currentScene: number;
  selectedLineId: string | null;
  bookmarks: string[];
  isDarkMode: boolean;
  studyMode: StudyMode;
  showExamTips: boolean;
}
