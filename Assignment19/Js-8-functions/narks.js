// 1. Array of marks
const marks = [85, 72, 90, 68, 95, 50];

// 2. Function to calculate average
function calculateAverage(arr) {
  let total = 0;
  for (let mark of arr) {
    total += mark;
  }
  return total / arr.length;
}

// 3. Function to find highest mark
function findHighest(arr) {
  let highest = arr[0];
  for (let mark of arr) {
    if (mark &gt; highest) {
      highest = mark;
    }
  }
  return highest;
}

// 4. Function to find lowest mark
function findLowest(arr) {
  let lowest = arr[0];
  for (let mark of arr) {
    if (mark &lt; lowest) {
      lowest = mark;
    }
  }
  return lowest;
}

// 5. Function to count passing students (passing ≥ 60)
function countPassing(arr) {
  let count = 0;
  for (let mark of arr) {
    if (mark &gt;= 60) {
      count++;
    }
  }
  return count;
}

// 6. Print all results
console.log("Average Marks: " + calculateAverage(marks).toFixed(1));
console.log("Highest Marks: " + findHighest(marks));
console.log("Lowest Marks: " + findLowest(marks));
console.log("Passing Students: " + countPassing(marks));
