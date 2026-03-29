// Task Scheduling Problem - trying to find max non-overlapping tasks
// This is for a delivery driver platform

// BRUTE FORCE APPROACH
// The idea: try all combinations of tasks and find the one with max tasks
// that don't overlap. It's gonna be slow but should be correct

function bruteForceSolution(tasks) {
  // first thing to do is validate inputs
  if (!tasks || tasks.length === 0) {
    return [];
  }

  let maxTasks = [];
  let maxCount = 0;

  // generate all possible combinations using recursion
  function generateCombinations(index, currentCombination) {
    // base case: we've checked all tasks
    if (index === tasks.length) {
      // check if current combination is valid (no overlaps)
      if (isValidCombination(currentCombination)) {
        if (currentCombination.length > maxCount) {
          maxCount = currentCombination.length;
          maxTasks = [...currentCombination];
        }
      }
      return;
    }

    // include current task
    currentCombination.push(tasks[index]);
    generateCombinations(index + 1, currentCombination);
    currentCombination.pop();

    // exclude current task
    generateCombinations(index + 1, currentCombination);
  }

  generateCombinations(0, []);
  return maxTasks;
}

// helper function to check if tasks overlap
function isValidCombination(taskList) {
  if (taskList.length <= 1) return true;

  // sort by start time
  const sorted = [...taskList].sort((a, b) => a.start - b.start);

  for (let i = 0; i < sorted.length - 1; i++) {
    // check if end time of task i is greater than start time of task i+1
    if (sorted[i].end > sorted[i + 1].start) {
      return false; // they overlap!
    }
  }

  return true;
}

// GREEDY APPROACH
// The idea: always pick the task that ends earliest
// This should be faster and actually gives optimal solution for this problem

function greedySolution(tasks) {
  if (!tasks || tasks.length === 0) {
    return [];
  }

  // sort by end time - this is the key insight!
  const sorted = [...tasks].sort((a, b) => a.end - b.end);

  const selected = [];
  let lastEndTime = -Infinity;

  for (const task of sorted) {
    // if this task starts after the last one ended, we can take it
    if (task.start >= lastEndTime) {
      selected.push(task);
      lastEndTime = task.end;
    }
  }

  return selected;
}

module.exports = {
  bruteForceSolution,
  greedySolution,
  isValidCombination
};
