import { QuestionType } from '../types';

export const questions: QuestionType[] = [
  // Number Sense & Place Value
  {
    id: 'ns-1',
    question: 'Count from 45 to 60. Select the correct sequence.',
    type: 'multiple-choice',
    choices: [
      '45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60',
      '45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60',
      '45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60',
      '45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 60'
    ],
    correctAnswer: '45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60',
    section: 'number-sense',
    explanation: 'Counting numbers in sequence means saying each number in order without skipping any.'
  },
  {
    id: 'ns-2',
    question: 'What number comes after 89?',
    type: 'text-input',
    correctAnswer: '90',
    section: 'number-sense',
    explanation: 'After 89 comes 90. When we count up from 89, we reach 90 next.'
  },
  {
    id: 'ns-3',
    question: 'What number is 10 more than 36?',
    type: 'text-input',
    correctAnswer: '46',
    section: 'number-sense',
    explanation: 'To find 10 more than 36, we add 10 to 36, which gives us 46.'
  },
  {
    id: 'ns-4',
    question: 'Compare the numbers using <, > or =: 72 ___ 27',
    type: 'multiple-choice',
    choices: ['<', '>', '='],
    correctAnswer: '>',
    section: 'number-sense',
    explanation: '72 is greater than 27, so we use the > symbol.'
  },
  {
    id: 'ns-5',
    question: 'Which picture shows 34 using tens and ones?',
    type: 'multiple-choice',
    choices: [
      '3 tens and 4 ones',
      '4 tens and 3 ones',
      '2 tens and 14 ones',
      '1 ten and 24 ones'
    ],
    correctAnswer: '3 tens and 4 ones',
    section: 'number-sense',
    explanation: 'The number 34 is made up of 3 tens (30) and 4 ones (4).'
  },
  
  // Addition & Subtraction
  {
    id: 'as-1',
    question: 'Solve: 7 + 6 = ?',
    type: 'text-input',
    correctAnswer: '13',
    section: 'addition-subtraction',
    explanation: 'To add 7 and 6, you can count up 6 more from 7, or use strategies like "make a ten" by taking 3 from 6 to make 10 + 3 = 13.'
  },
  {
    id: 'as-2',
    question: 'Solve: 15 - 8 = ?',
    type: 'text-input',
    correctAnswer: '7',
    section: 'addition-subtraction',
    explanation: 'To subtract 8 from 15, you can count back 8 from 15, or think of it as "how many more to get from 8 to 15?" which is 7.'
  },
  {
    id: 'as-3',
    question: 'Fill in the missing number: 5 + ___ = 12',
    type: 'text-input',
    correctAnswer: '7',
    section: 'addition-subtraction',
    explanation: 'To find the missing number, we can think "what number plus 5 equals 12?" The answer is 7 because 5 + 7 = 12.'
  },
  {
    id: 'as-4',
    question: 'Sammy has 9 apples. He gives 3 to his friend. How many does he have left?',
    type: 'text-input',
    correctAnswer: '6',
    section: 'addition-subtraction',
    explanation: 'To solve this problem, we need to subtract: 9 - 3 = 6. Sammy has 6 apples left.'
  },
  {
    id: 'as-5',
    question: 'Which equations belong to the same fact family?',
    type: 'multiple-choice',
    choices: [
      '4 + 3 = 7 and 7 - 3 = 4',
      '4 + 3 = 7 and 3 + 7 = 10',
      '4 + 3 = 7 and 4 - 3 = 1',
      '4 + 3 = 7 and 7 + 3 = 10'
    ],
    correctAnswer: '4 + 3 = 7 and 7 - 3 = 4',
    section: 'addition-subtraction',
    explanation: 'A fact family shows the relationship between addition and subtraction with the same numbers. For 4, 3, and 7, the fact family includes 4 + 3 = 7, 3 + 4 = 7, 7 - 3 = 4, and 7 - 4 = 3.'
  },
  
  // Measurement & Data
  {
    id: 'md-1',
    question: 'Which is the best tool to measure the length of your pencil?',
    type: 'multiple-choice',
    choices: [
      'Ruler',
      'Scale',
      'Clock',
      'Measuring cup'
    ],
    correctAnswer: 'Ruler',
    section: 'measurement-data',
    explanation: 'A ruler is the best tool to measure the length of objects like pencils.'
  },
  {
    id: 'md-2',
    question: 'Which object is longer?',
    type: 'multiple-choice',
    choices: [
      'A pencil is longer than a book',
      'A book is longer than a pencil',
      'They are the same length'
    ],
    correctAnswer: 'A book is longer than a pencil',
    section: 'measurement-data',
    explanation: 'Most books are longer than standard pencils.'
  },
  {
    id: 'md-3',
    question: 'Looking at the graph, there are 5 cats and 2 dogs. How many more cats than dogs are there?',
    type: 'text-input',
    correctAnswer: '3',
    section: 'measurement-data',
    explanation: 'To find how many more cats than dogs, we subtract: 5 - 2 = 3. There are 3 more cats than dogs.'
  },
  {
    id: 'md-4',
    question: 'If the clock shows 3 o\'clock, what time will it be in one hour?',
    type: 'text-input',
    correctAnswer: '4',
    section: 'measurement-data',
    explanation: 'In one hour after 3 o\'clock, the time will be 4 o\'clock.'
  },
  {
    id: 'md-5',
    question: 'How much is a nickel and a dime worth together?',
    type: 'multiple-choice',
    choices: [
      '15 cents',
      '10 cents',
      '6 cents',
      '25 cents'
    ],
    correctAnswer: '15 cents',
    section: 'measurement-data',
    explanation: 'A nickel is worth 5 cents and a dime is worth 10 cents. Together they are worth 5 + 10 = 15 cents.'
  },
  
  // Geometry
  {
    id: 'geo-1',
    question: 'Which shape has 4 equal sides?',
    type: 'multiple-choice',
    choices: [
      'Square',
      'Rectangle',
      'Triangle',
      'Circle'
    ],
    correctAnswer: 'Square',
    section: 'geometry',
    explanation: 'A square has 4 sides that are all equal in length.'
  },
  {
    id: 'geo-2',
    question: 'How many sides does a hexagon have?',
    type: 'text-input',
    correctAnswer: '6',
    section: 'geometry',
    explanation: 'A hexagon has 6 sides. The prefix "hex-" means six.'
  },
  {
    id: 'geo-3',
    question: 'Which of these is shaped like a cylinder?',
    type: 'multiple-choice',
    choices: [
      'A can of soup',
      'A ball',
      'A box',
      'A pyramid'
    ],
    correctAnswer: 'A can of soup',
    section: 'geometry',
    explanation: 'A cylinder has two circular flat ends and a curved side, just like a can of soup.'
  },
  {
    id: 'geo-4',
    question: 'What does symmetrical mean?',
    type: 'multiple-choice',
    choices: [
      'Both sides look the same when folded in half',
      'Has a lot of sides',
      'Is very big',
      'Has different shapes'
    ],
    correctAnswer: 'Both sides look the same when folded in half',
    section: 'geometry',
    explanation: 'Symmetry means that when you fold a shape or image in half along a line, both sides match exactly.'
  },
  {
    id: 'geo-5',
    question: 'If you cut a square in half, what shapes could you make?',
    type: 'multiple-choice',
    choices: [
      'Two rectangles',
      'Two triangles',
      'Both rectangles and triangles, depending on how you cut it',
      'Two circles'
    ],
    correctAnswer: 'Both rectangles and triangles, depending on how you cut it',
    section: 'geometry',
    explanation: 'If you cut a square in half horizontally or vertically, you get two rectangles. If you cut along the diagonal, you get two triangles.'
  }
]; 