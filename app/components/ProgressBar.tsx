'use client';

interface ProgressBarProps {
  current: number;
  total: number;
  section: string;
}

export default function ProgressBar({ current, total, section }: ProgressBarProps) {
  const progress = (current / total) * 100;
  
  const getSectionTitle = (section: string) => {
    switch(section) {
      case 'number-sense':
        return 'Number Sense & Place Value';
      case 'addition-subtraction':
        return 'Addition & Subtraction';
      case 'measurement-data':
        return 'Measurement & Data';
      case 'geometry':
        return 'Geometry';
      default:
        return section;
    }
  };
  
  const getSectionEmoji = (section: string) => {
    switch(section) {
      case 'number-sense':
        return '🔢';
      case 'addition-subtraction':
        return '➕➖';
      case 'measurement-data':
        return '📏📊';
      case 'geometry':
        return '📐🔷';
      default:
        return '📚';
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="text-xl font-kid font-bold">
          {getSectionEmoji(section)} {getSectionTitle(section)}
        </div>
        <div className="text-md text-gray-700">Question {current} of {total}</div>
      </div>
      
      <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-kid-blue to-kid-green"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
} 