'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { questions } from '../data/questions';
import { QuestionType, UserAnswer, AssessmentResult, AssessmentState } from '../types';
import Question from '../components/Question';
import ProgressBar from '../components/ProgressBar';
import Results from '../components/Results';

export default function Assessment() {
  const searchParams = useSearchParams();
  const childName = searchParams.get('name') || 'Friend';
  
  const [state, setState] = useState<AssessmentState>({
    currentSection: 'number-sense',
    currentQuestionIndex: 0,
    userAnswers: [],
    isComplete: false,
    results: null,
  });

  // Get questions for current section
  const currentSectionQuestions = questions.filter(
    (q) => q.section === state.currentSection
  );

  // Get current question
  const currentQuestion = currentSectionQuestions[state.currentQuestionIndex];

  const handleAnswerSubmit = (answer: string | string[]) => {
    const isCorrect = Array.isArray(currentQuestion.correctAnswer)
      ? Array.isArray(answer) && 
        currentQuestion.correctAnswer.length === answer.length && 
        currentQuestion.correctAnswer.every((ans) => answer.includes(ans))
      : answer === currentQuestion.correctAnswer;

    const userAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      answer,
      isCorrect,
    };

    const newUserAnswers = [...state.userAnswers, userAnswer];
    
    // Determine if we should move to next question, next section, or complete assessment
    const isLastQuestionInSection = state.currentQuestionIndex === currentSectionQuestions.length - 1;
    
    if (isLastQuestionInSection) {
      const sections = ['number-sense', 'addition-subtraction', 'measurement-data', 'geometry'];
      const currentSectionIndex = sections.indexOf(state.currentSection);
      const isLastSection = currentSectionIndex === sections.length - 1;
      
      if (isLastSection) {
        // Assessment is complete - calculate results
        const results = calculateResults(newUserAnswers);
        
        setState({
          ...state,
          userAnswers: newUserAnswers,
          isComplete: true,
          results,
        });
      } else {
        // Move to next section
        setState({
          ...state,
          currentSection: sections[currentSectionIndex + 1],
          currentQuestionIndex: 0,
          userAnswers: newUserAnswers,
        });
      }
    } else {
      // Move to next question in current section
      setState({
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        userAnswers: newUserAnswers,
      });
    }
  };

  const calculateResults = (userAnswers: UserAnswer[]): AssessmentResult => {
    const totalQuestions = questions.length;
    const correctAnswers = userAnswers.filter((answer) => answer.isCorrect).length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Calculate section results
    const sectionResults = {
      'number-sense': { total: 0, correct: 0 },
      'addition-subtraction': { total: 0, correct: 0 },
      'measurement-data': { total: 0, correct: 0 },
      'geometry': { total: 0, correct: 0 },
    };
    
    userAnswers.forEach((answer) => {
      const question = questions.find((q) => q.id === answer.questionId);
      if (question) {
        const section = question.section;
        sectionResults[section].total++;
        if (answer.isCorrect) {
          sectionResults[section].correct++;
        }
      }
    });
    
    // Determine areas for improvement
    const recommendedAreas: string[] = [];
    
    Object.entries(sectionResults).forEach(([section, results]) => {
      const sectionPercentage = Math.round((results.correct / results.total) * 100);
      
      if (sectionPercentage < 70) {
        switch(section) {
          case 'number-sense':
            recommendedAreas.push('Practice counting in sequence and understanding place value');
            break;
          case 'addition-subtraction':
            recommendedAreas.push('Work on basic addition, subtraction, and word problems');
            break;
          case 'measurement-data':
            recommendedAreas.push('Practice using measurement tools and reading simple graphs');
            break;
          case 'geometry':
            recommendedAreas.push('Learn more about shapes and their properties');
            break;
        }
      }
    });
    
    return {
      totalQuestions,
      correctAnswers,
      percentage,
      sectionResults,
      recommendedAreas,
    };
  };

  if (state.isComplete && state.results) {
    return <Results results={state.results} name={childName} />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-kid font-bold text-primary mb-2">
          Hi {childName}! Let&apos;s do some math! 🧮
        </h1>
        <p className="text-lg text-gray-700">
          Answer each question as best as you can. Take your time and have fun!
        </p>
      </div>
      
      <ProgressBar 
        current={state.currentQuestionIndex + 1} 
        total={currentSectionQuestions.length}
        section={state.currentSection}
      />
      
      {currentQuestion && (
        <Question
          question={currentQuestion}
          onAnswerSubmit={handleAnswerSubmit}
        />
      )}
    </div>
  );
} 