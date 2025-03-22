'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ParentChecklist() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-kid font-bold text-primary mb-4">
          Grade 1 Math Checklist for Parents
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          This checklist helps you understand what your child should know in Grade 1 math.
          It also includes activities and resources to help them practice these skills.
        </p>
        <div className="mt-6">
          <Link href="/" className="kid-button bg-kid-blue hover:bg-blue-400 inline-block mx-2">
            Back to Home
          </Link>
          <Link href="/assessment" className="kid-button bg-kid-green hover:bg-green-400 inline-block mx-2">
            Start Assessment
          </Link>
        </div>
      </div>

      {/* Number Sense & Place Value */}
      <div className="mb-8">
        <div 
          className={`kid-card border-kid-yellow cursor-pointer transition-all ${
            expandedSection === 'number-sense' ? 'border-l-8' : ''
          }`}
          onClick={() => toggleSection('number-sense')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">1. Number Sense & Place Value 🔢</h2>
            <div className="text-3xl">
              {expandedSection === 'number-sense' ? '−' : '+'}
            </div>
          </div>

          {expandedSection === 'number-sense' && (
            <div className="mt-6 space-y-4 text-gray-700">
              <div className="bg-blue-50 p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-2">What your child should know:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Count forward and backward up to 120</li>
                  <li>Read and write numbers up to 120</li>
                  <li>Understand place value: tens and ones (e.g., 54 = 5 tens and 4 ones)</li>
                  <li>Compare two-digit numbers using &gt;, &lt;, and =</li>
                  <li>Skip counting by 2s, 5s, and 10s up to 120</li>
                  <li>Identify odd and even numbers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Practice Activities:</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-blue">
                    <h4 className="font-bold text-lg">Counting Games</h4>
                    <p>Have your child count everyday objects like stairs, toys, or books. Say "Start at 45 and count to 60" or "Count backward from 20."</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-blue">
                    <h4 className="font-bold text-lg">Place Value Fun</h4>
                    <p>Use Lego blocks or bundles of straws to represent tens and ones. For example, 34 would be 3 bundles of 10 and 4 individual pieces.</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-blue">
                    <h4 className="font-bold text-lg">Number Comparison</h4>
                    <p>Write pairs of numbers on cards and have your child place the correct symbol (&gt;, &lt;, =) between them. Make it a game: "Which number is greater?"</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-blue">
                    <h4 className="font-bold text-lg">Skip Counting Hopscotch</h4>
                    <p>Draw a hopscotch grid outdoors and have your child skip count by 2s, 5s, or 10s as they hop.</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Online Resources:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ABCya! - <a href="https://www.abcya.com/games/number_bubble_skip_counting" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skip Counting Bubbles</a></li>
                  <li>Khan Academy - <a href="https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-place-value" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Place Value</a></li>
                  <li>PBS Kids - <a href="https://pbskids.org/curiousgeorge/busyday/ten/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Curious George Tens Frame</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Addition & Subtraction */}
      <div className="mb-8">
        <div 
          className={`kid-card border-kid-pink cursor-pointer transition-all ${
            expandedSection === 'addition-subtraction' ? 'border-l-8' : ''
          }`}
          onClick={() => toggleSection('addition-subtraction')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">2. Addition & Subtraction ➕➖</h2>
            <div className="text-3xl">
              {expandedSection === 'addition-subtraction' ? '−' : '+'}
            </div>
          </div>

          {expandedSection === 'addition-subtraction' && (
            <div className="mt-6 space-y-4 text-gray-700">
              <div className="bg-blue-50 p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-2">What your child should know:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Solve addition and subtraction problems within 20</li>
                  <li>Use strategies like counting on, making ten, and doubles</li>
                  <li>Understand fact families (e.g., 7 + 3 = 10, so 10 - 3 = 7)</li>
                  <li>Solve simple word problems</li>
                  <li>Understand that subtraction is finding the difference</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Practice Activities:</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-pink">
                    <h4 className="font-bold text-lg">Domino Math</h4>
                    <p>Use dominoes to practice addition. The dots on each side can be added together.</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-pink">
                    <h4 className="font-bold text-lg">Snack Math</h4>
                    <p>Use small snacks like raisins or cereal for hands-on addition and subtraction. "You have 10 raisins. If you eat 4, how many are left?"</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-pink">
                    <h4 className="font-bold text-lg">Fact Family Houses</h4>
                    <p>Draw a house with 4 windows. Write a number in the roof (e.g., 10) and two numbers that make that sum in the foundation (e.g., 6 and 4). In the windows, write the four facts: 6+4=10, 4+6=10, 10-6=4, 10-4=6.</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-pink">
                    <h4 className="font-bold text-lg">Story Problems</h4>
                    <p>Create simple word problems based on everyday situations. "We need 8 plates for dinner. We only have 5. How many more do we need?"</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Online Resources:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Fun Brain - <a href="https://www.funbrain.com/games/math-baseball" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Math Baseball</a></li>
                  <li>Education.com - <a href="https://www.education.com/games/first-grade/math/addition/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Addition Games</a></li>
                  <li>Math Playground - <a href="https://www.mathplayground.com/ASB_Canoe_Puppies.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Subtraction Game</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Measurement & Data */}
      <div className="mb-8">
        <div 
          className={`kid-card border-kid-green cursor-pointer transition-all ${
            expandedSection === 'measurement-data' ? 'border-l-8' : ''
          }`}
          onClick={() => toggleSection('measurement-data')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">3. Measurement & Data 📏📊</h2>
            <div className="text-3xl">
              {expandedSection === 'measurement-data' ? '−' : '+'}
            </div>
          </div>

          {expandedSection === 'measurement-data' && (
            <div className="mt-6 space-y-4 text-gray-700">
              <div className="bg-blue-50 p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-2">What your child should know:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Compare and order objects by length, weight, and volume</li>
                  <li>Use non-standard and standard units to measure</li>
                  <li>Tell time to the hour and half-hour</li>
                  <li>Identify and count coins (penny, nickel, dime, quarter)</li>
                  <li>Organize and interpret simple graphs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Practice Activities:</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-green">
                    <h4 className="font-bold text-lg">Measuring Hunt</h4>
                    <p>Find objects around the house to measure with a ruler or with non-standard units like paper clips or your child's hand.</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-green">
                    <h4 className="font-bold text-lg">Daily Clock Check</h4>
                    <p>Use a teaching clock to show different times. Ask your child to identify times at regular intervals throughout the day.</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-green">
                    <h4 className="font-bold text-lg">Coin Sorting</h4>
                    <p>Practice identifying and sorting real coins. Make a simple store where items cost different amounts (5¢, 10¢, 25¢).</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-green">
                    <h4 className="font-bold text-lg">Family Graphs</h4>
                    <p>Make simple graphs about your family (favorite colors, foods, activities). Ask questions about the data: "Which color do most people like?"</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Online Resources:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ABCya! - <a href="https://www.abcya.com/games/telling_time" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Interactive Clock</a></li>
                  <li>Math Games - <a href="https://www.mathgames.com/skill/1.36-measure-using-objects" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Measuring with Objects</a></li>
                  <li>PBS Kids - <a href="https://pbskids.org/sid/games/gabrielas-picture-graph" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Picture Graphs</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Geometry */}
      <div className="mb-8">
        <div 
          className={`kid-card border-kid-purple cursor-pointer transition-all ${
            expandedSection === 'geometry' ? 'border-l-8' : ''
          }`}
          onClick={() => toggleSection('geometry')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">4. Geometry 📐🔷</h2>
            <div className="text-3xl">
              {expandedSection === 'geometry' ? '−' : '+'}
            </div>
          </div>

          {expandedSection === 'geometry' && (
            <div className="mt-6 space-y-4 text-gray-700">
              <div className="bg-blue-50 p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-2">What your child should know:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Identify and name 2D shapes (square, circle, triangle, rectangle, hexagon)</li>
                  <li>Identify and name 3D shapes (cube, sphere, cylinder, cone)</li>
                  <li>Describe shapes using attributes (sides, corners, edges, faces)</li>
                  <li>Compose and decompose shapes</li>
                  <li>Recognize and create simple symmetry</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Practice Activities:</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-purple">
                    <h4 className="font-bold text-lg">Shape Hunt</h4>
                    <p>Go on a "shape hunt" around your home or neighborhood. "Can you find something shaped like a cylinder? A cube?"</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-purple">
                    <h4 className="font-bold text-lg">Shape Art</h4>
                    <p>Create pictures using only geometric shapes. For example, a house made from a square and triangle, or a robot made from rectangles.</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-purple">
                    <h4 className="font-bold text-lg">Symmetry Activities</h4>
                    <p>Fold paper in half and cut out shapes to create symmetrical designs. Paint one side of folded paper, then fold to create mirror images.</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-xl border-2 border-kid-purple">
                    <h4 className="font-bold text-lg">Pattern Blocks</h4>
                    <p>Use pattern blocks or tangrams to create new shapes. "Can you make a rectangle using two triangles?"</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Online Resources:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ABCya! - <a href="https://www.abcya.com/games/shapes_geometry_game" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Shape Matching</a></li>
                  <li>Toy Theater - <a href="https://toytheater.com/geoboard/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Online Geoboard</a></li>
                  <li>National Library of Virtual Manipulatives - <a href="https://www.mathplayground.com/tangrams.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Virtual Tangrams</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Advanced Skills (Optional) */}
      <div className="mb-8">
        <div 
          className={`kid-card border-kid-blue cursor-pointer transition-all ${
            expandedSection === 'advanced' ? 'border-l-8' : ''
          }`}
          onClick={() => toggleSection('advanced')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">5. Optional Advanced Skills 🚀</h2>
            <div className="text-3xl">
              {expandedSection === 'advanced' ? '−' : '+'}
            </div>
          </div>

          {expandedSection === 'advanced' && (
            <div className="mt-6 space-y-4 text-gray-700">
              <div className="bg-yellow-50 p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-2">For children ready for more challenges:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Advanced Number Sense:</strong> Counting beyond 120 (up to 1,000), skip counting, number patterns, place value to 1,000</li>
                  <li><strong>Early Multiplication & Division:</strong> Understanding multiplication as repeated addition, division as sharing equally</li>
                  <li><strong>Logic & Problem-Solving:</strong> Logic puzzles, complex patterns, problems with missing addends</li>
                  <li><strong>Early Data & Probability:</strong> More complex graphs, likely vs. unlikely events, simple fractions</li>
                  <li><strong>Money & Time Mastery:</strong> Counting mixed coins up to $1, making change, telling time to nearest 5 minutes</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Resources for Advanced Learners:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Beast Academy - <a href="https://beastacademy.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Challenging math for advanced students</a></li>
                  <li>Khan Academy - <a href="https://www.khanacademy.org/math/cc-2nd-grade-math" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">2nd Grade Math (for students ready to advance)</a></li>
                  <li>Math Playground - <a href="https://www.mathplayground.com/thinkingblocks/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Thinking Blocks (Visual Problem Solving)</a></li>
                  <li>Prodigy Math Game - <a href="https://www.prodigygame.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Adaptive math learning game</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="kid-card border-kid-yellow mt-12">
        <h2 className="text-2xl font-bold mb-4">Additional Tips for Parents</h2>
        <div className="space-y-4">
          <p>
            <strong>Make math fun:</strong> Use games, puzzles, and everyday activities to reinforce math concepts.
          </p>
          <p>
            <strong>Use real-world connections:</strong> Point out math in daily life - cooking (measuring), shopping (money), time (schedules).
          </p>
          <p>
            <strong>Be positive about math:</strong> Show enthusiasm and avoid saying "I was never good at math."
          </p>
          <p>
            <strong>Celebrate progress:</strong> Acknowledge improvements and effort, not just correct answers.
          </p>
          <p>
            <strong>Regular practice:</strong> Short, frequent practice sessions are more effective than occasional long ones.
          </p>
        </div>
        
        <div className="mt-8 flex justify-center">
          <Link 
            href="/assessment"
            className="kid-button bg-kid-green hover:bg-green-400 text-center text-xl"
          >
            Take the Math Assessment 📝
          </Link>
        </div>
      </div>
    </div>
  );
} 