'use client';

import { useState } from 'react';
import Image from 'next/image';
import CustomLink from './components/CustomLink';

export default function Home() {
  const [childName, setChildName] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 my-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-kid font-bold text-primary mb-2">
          Grade 1 Math Assessment
        </h1>
        <div className="flex justify-center gap-4 my-4">
          {['🧩', '🔢', '📏', '⏰', '📐'].map((emoji, i) => (
            <div key={i} className="text-4xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
              {emoji}
            </div>
          ))}
        </div>
        <p className="text-xl text-gray-700">
          Let&apos;s have fun checking your math skills!
        </p>
      </div>

      <div className="kid-card border-kid-pink w-full max-w-md">
        <label className="block text-xl font-medium mb-2" htmlFor="childName">
          What&apos;s your name? 🙂
        </label>
        <input
          type="text"
          id="childName"
          value={childName}
          onChange={(e) => setChildName(e.target.value)}
          placeholder="Type your name here..."
          className="w-full p-3 border-2 border-kid-blue rounded-xl text-xl focus:border-primary focus:ring focus:ring-primary/30 outline-none"
        />
        
        <div className="mt-8 flex flex-col space-y-4">
          <CustomLink
            href={`/assessment?name=${encodeURIComponent(childName || 'Friend')}`}
            className="kid-button bg-kid-blue hover:bg-blue-400 text-center text-xl"
          >
            Start Assessment 🚀
          </CustomLink>
          
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="kid-button bg-kid-purple hover:bg-purple-400 text-center text-xl"
          >
            {showInstructions ? 'Hide Instructions 📝' : 'Show Instructions 📝'}
          </button>
          
          <CustomLink
            href="/parents"
            className="kid-button bg-kid-green hover:bg-green-400 text-center text-xl"
          >
            Parents Resources & Checklist 👨‍👩‍👧‍👦
          </CustomLink>
        </div>
      </div>

      {showInstructions && (
        <div className="kid-card border-kid-purple w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Instructions for Parents</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>This assessment covers Grade 1 math skills in four areas:</li>
            <ul className="list-disc pl-5 ml-2">
              <li>Number Sense & Place Value</li>
              <li>Addition & Subtraction</li>
              <li>Measurement & Data</li>
              <li>Geometry</li>
            </ul>
            <li>There are 5 questions in each section (20 total)</li>
            <li>Help your child read the questions if needed</li>
            <li>Let them try to answer independently</li>
            <li>The assessment takes about 20-40 minutes</li>
            <li>You'll get a summary of results at the end</li>
          </ul>
        </div>
      )}
    </div>
  );
} 