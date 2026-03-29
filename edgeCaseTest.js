// Edge case testing
// Testing both algorithms on weird scenarios

const { bruteForceSolution, greedySolution } = require('./taskScheduling');

function testEdgeCase(name, tasks) {
  console.log(`TEST: ${name}`);
  console.log('Input:', tasks);

  const bruteResult = bruteForceSolution(tasks);
  const greedyResult = greedySolution(tasks);

  console.log(`Brute Force: ${bruteResult.length} tasks -`, bruteResult);
  console.log(`Greedy: ${greedyResult.length} tasks -`, greedyResult);

  if (bruteResult.length === greedyResult.length) {
    console.log('✓ Same result\n');
  } else {
    console.log('✗ DIFFERENT RESULTS!\n');
  }
}

console.log('=== EDGE CASE TESTING ===\n');

// Case 1: All tasks overlapping
const allOverlapping = [
  { start: 1, end: 10 },
  { start: 2, end: 9 },
  { start: 3, end: 8 },
  { start: 4, end: 7 }
];
testEdgeCase('All tasks overlapping', allOverlapping);

// Case 2: All tasks non-overlapping
const allNonOverlapping = [
  { start: 1, end: 2 },
  { start: 2, end: 3 },
  { start: 3, end: 4 },
  { start: 4, end: 5 }
];
testEdgeCase('All tasks non-overlapping', allNonOverlapping);

// Case 3: Same start times
const sameStart = [
  { start: 1, end: 3 },
  { start: 1, end: 5 },
  { start: 1, end: 10 },
  { start: 6, end: 7 }
];
testEdgeCase('Tasks with same start time', sameStart);

// Case 4: Same end times
const sameEnd = [
  { start: 1, end: 5 },
  { start: 2, end: 5 },
  { start: 3, end: 5 },
  { start: 6, end: 8 }
];
testEdgeCase('Tasks with same end time', sameEnd);

// Case 5: Single task
const singleTask = [
  { start: 1, end: 5 }
];
testEdgeCase('Single task', singleTask);

// Case 6: Empty input
testEdgeCase('Empty input', []);

// Case 7: One task that contains others (nested)
const nested = [
  { start: 1, end: 10 },
  { start: 2, end: 3 },
  { start: 4, end: 5 },
  { start: 6, end: 7 }
];
testEdgeCase('One big task containing others', nested);

console.log('=== SUMMARY ===');
console.log('Both algorithms should handle all edge cases correctly.');
console.log('The greedy approach works because it always picks the earliest-ending task,');
console.log('leaving the most room for future tasks. This is mathematically optimal.');
