// Testing the algorithms with the given sample
const { bruteForceSolution, greedySolution } = require('./taskScheduling');

// Sample input from the exercise
const tasks = [
  { start: 1, end: 3 },
  { start: 2, end: 5 },
  { start: 4, end: 6 },
  { start: 6, end: 7 },
  { start: 5, end: 9 },
  { start: 8, end: 10 }
];

console.log('=== BASIC TEST WITH SAMPLE INPUT ===\n');
console.log('Input tasks:', tasks);
console.log('\n');

// test brute force
console.log('BRUTE FORCE RESULT:');
const bruteResult = bruteForceSolution(tasks);
console.log('Selected tasks:', bruteResult);
console.log('Number of tasks:', bruteResult.length);
console.log('\n');

// test greedy
console.log('GREEDY RESULT:');
const greedyResult = greedySolution(tasks);
console.log('Selected tasks:', greedyResult);
console.log('Number of tasks:', greedyResult.length);
console.log('\n');

// verify they give same count (even if order might be different)
if (bruteResult.length === greedyResult.length) {
  console.log('✓ Both algorithms found the same count! (' + bruteResult.length + ' tasks)');
} else {
  console.log('✗ ERROR: Different counts!');
  console.log('  Brute force: ' + bruteResult.length);
  console.log('  Greedy: ' + greedyResult.length);
}
