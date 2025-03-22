'use client';

import React, { useState } from 'react';
import { QuestionType } from '../types';

interface QuestionProps {
  question: QuestionType;
  onAnswerSubmit: (answer: string | string[]) => void;
}

export default function Question({ question, onAnswerSubmit }: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMultipleChoiceSelect = (choice: string) => {
    setSelectedAnswer(choice);
  };

  const handleSubmit = () => {
    setIsAnimating(true);
    
    if (question.type === 'multiple-choice') {
      onAnswerSubmit(selectedAnswer);
    } else if (question.type === 'text-input') {
      onAnswerSubmit(textInput);
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className={`question-card ${isAnimating ? 'animate-bounce' : ''} border-kid-yellow`}>
      <h2 className="text-2xl font-kid font-bold mb-4 text-primary">
        {question.question}
      </h2>

      <div className="my-6">
        {question.type === 'multiple-choice' && (
          <div className="space-y-3">
            {question.choices?.map((choice, index) => (
              <div 
                key={index}
                onClick={() => handleMultipleChoiceSelect(choice)}
                className={`option-button ${
                  selectedAnswer === choice 
                    ? 'bg-kid-blue text-white border-blue-500' 
                    : 'bg-white border-gray-300 hover:border-kid-blue'
                }`}
              >
                <span className="mr-3">{String.fromCharCode(65 + index)}.</span>
                {choice}
              </div>
            ))}
          </div>
        )}

        {question.type === 'text-input' && (
          <div>
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full p-3 border-2 border-kid-blue rounded-xl text-xl focus:border-primary focus:ring focus:ring-primary/30 outline-none"
            />
          </div>
        )}
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleSubmit}
          disabled={
            (question.type === 'multiple-choice' && !selectedAnswer) ||
            (question.type === 'text-input' && !textInput)
          }
          className={`kid-button ${
            (question.type === 'multiple-choice' && selectedAnswer) ||
            (question.type === 'text-input' && textInput)
              ? 'bg-kid-green hover:bg-green-400'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Submit Answer ✓
        </button>
      </div>
    </div>
  );
} 