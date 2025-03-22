export type QuestionType = {
  id: string;
  question: string;
  type: 'multiple-choice' | 'text-input' | 'drawing' | 'matching' | 'counting';
  choices?: string[];
  correctAnswer: string | string[];
  section: 'number-sense' | 'addition-subtraction' | 'measurement-data' | 'geometry';
  image?: string;
  explanation?: string;
};

export type AssessmentResult = {
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  sectionResults: {
    'number-sense': { total: number; correct: number };
    'addition-subtraction': { total: number; correct: number };
    'measurement-data': { total: number; correct: number };
    'geometry': { total: number; correct: number };
  };
  recommendedAreas: string[];
};

export type UserAnswer = {
  questionId: string;
  answer: string | string[];
  isCorrect: boolean;
};

export type AssessmentState = {
  currentSection: string;
  currentQuestionIndex: number;
  userAnswers: UserAnswer[];
  isComplete: boolean;
  results: AssessmentResult | null;
}; 