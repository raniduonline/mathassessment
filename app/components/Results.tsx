'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AssessmentResult } from '../types';
import dynamic from 'next/dynamic';

const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false });

interface ResultsProps {
  results: AssessmentResult;
  name: string;
}

export default function Results({ results, name }: ResultsProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);

    return () => {
      window.removeEventListener('resize', updateWindowSize);
      clearTimeout(timer);
    };
  }, []);

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 80) return 'text-blue-600';
    if (percentage >= 65) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreText = (percentage: number) => {
    if (percentage >= 90) return 'Strong Mastery';
    if (percentage >= 80) return 'On Track';
    if (percentage >= 65) return 'Needs Some Support';
    return 'Needs Additional Help';
  };

  const getSectionName = (sectionKey: string) => {
    switch(sectionKey) {
      case 'number-sense': return 'Number Sense & Place Value';
      case 'addition-subtraction': return 'Addition & Subtraction';
      case 'measurement-data': return 'Measurement & Data';
      case 'geometry': return 'Geometry';
      default: return sectionKey;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {showConfetti && results.percentage >= 65 && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={results.percentage >= 90 ? 500 : 200}
        />
      )}

      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-kid font-bold text-center text-primary">
          Great job, {name}! 🌟
        </h1>
        
        <div className="kid-card w-full border-kid-yellow">
          <h2 className="text-2xl font-bold mb-6 text-center">Your Math Assessment Results</h2>
          
          <div className="text-center mb-8">
            <div className="text-6xl font-bold mb-2 inline-block p-6 rounded-full bg-kid-yellow">
              {results.percentage}%
            </div>
            <div className={`text-xl font-bold ${getScoreColor(results.percentage)}`}>
              {getScoreText(results.percentage)}
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-bold">Section Results:</h3>
            {(Object.keys(results.sectionResults) as Array<keyof typeof results.sectionResults>).map((section) => {
              const { total, correct } = results.sectionResults[section];
              const percentage = Math.round((correct / total) * 100);
              return (
                <div key={section} className="grid grid-cols-3 gap-2 items-center">
                  <div className="font-medium">{getSectionName(section)}</div>
                  <div className="col-span-2">
                    <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${
                          percentage >= 90 ? 'bg-green-500' :
                          percentage >= 80 ? 'bg-blue-500' :
                          percentage >= 65 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm mt-1 text-right">{correct} of {total} ({percentage}%)</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {results.recommendedAreas.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Areas to Work On:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {results.recommendedAreas.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="bg-blue-50 p-4 rounded-xl border border-kid-blue">
            <h3 className="text-lg font-bold mb-2">What's Next?</h3>
            <p>
              Practice your math skills regularly! Try using everyday activities like counting objects, 
              measuring ingredients while cooking, or identifying shapes around your home. 
              Games like board games with counting or card games can also make math fun!
            </p>
            <p className="mt-2">
              Check out our <Link href="/parents" className="text-blue-600 hover:underline font-bold">Parent Resources</Link> for 
              activities, exercises, and online resources to help your child build their math skills.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
            <Link 
              href="/"
              className="kid-button bg-kid-blue hover:bg-blue-400 text-center text-xl"
            >
              Try Again! 🔄
            </Link>
            
            <Link 
              href="/parents"
              className="kid-button bg-kid-green hover:bg-green-400 text-center text-xl"
            >
              Parent Resources 📚
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 