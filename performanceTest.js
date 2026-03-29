// Performance testing with large inputs
// Let's see how each algorithm handles 10,000 tasks

const { bruteForceSolution, greedySolution } = require('./taskScheduling');

// function to generate random tasks
function generateRandomTasks(count) {
  const tasks = [];
  for (let i = 0; i < count; i++) {
    const start = Math.floor(Math.random() * 100);
    const end = start + Math.floor(Math.random() * 50) + 1; // ensure end > start
    tasks.push({ start, end });
  }
  return tasks;
}

console.log('=== PERFORMANCE TEST ===\n');

// test with different sizes to see the difference
const testSizes = [100, 500, 1000];

testSizes.forEach(size => {
  console.log(`Testing with ${size} tasks:`);
  console.log('----------------------------------------');

  const randomTasks = generateRandomTasks(size);

  // test greedy first (should be fast)
  const greedyStart = process.hrtime.bigint();
  const greedyResult = greedySolution(randomTasks);
  const greedyEnd = process.hrtime.bigint();
  const greedyTime = Number(greedyEnd - greedyStart) / 1000; // convert to microseconds

  console.log(`Greedy:      ${greedyTime.toFixed(2)} μs - selected ${greedyResult.length} tasks`);

  // test brute force (warning: might be slow!)
  if (size <= 100) {
    const bruteStart = process.hrtime.bigint();
    const bruteResult = bruteForceSolution(randomTasks);
    const bruteEnd = process.hrtime.bigint();
    const bruteTime = Number(bruteEnd - bruteStart) / 1000; // convert to microseconds

    console.log(`Brute Force: ${bruteTime.toFixed(2)} μs - selected ${bruteResult.length} tasks`);

    const speedup = bruteTime / greedyTime;
    console.log(`Greedy is ${speedup.toFixed(1)}x faster`);
  } else {
    console.log('Brute Force: SKIPPED (would take way too long with ' + size + ' tasks)');
  }

  console.log('\n');
});

console.log('=== OBSERVATIONS ===');
console.log('- Greedy stays fast even with larger inputs');
console.log('- Brute force gets exponentially slower (2^n complexity)');
console.log('- This explains why we need the greedy approach for real-world use');
