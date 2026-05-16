import { floodFill } from "./floodFillAlgorithm.js";
import { trapRainwater, displayResults } from "./trapRainwaterAlgorithm.js";
import { displayClimbStairs } from "./climbStairsAlgorithm.js";
import { displayCanJump } from "./canJumpAlgorithm.js";
import { displayRodCutting } from "./rodCuttingMaxAlgorithm.js";
import { displayLargestRectangle } from "./largestRectangleInHistogramAlgorithm.js";
import { displayMaximalRectangle } from "./maximalRectangle.js";
import * as readline from 'readline';

// Helper function to print before and after for flood fill
const printComparison = (
  original: number[][],
  result: number[][],
  title: string,
) => {
  console.log(`\n${title}:`);
  console.log("Original:");
  console.table(original);
  console.log("After flood fill:");
  console.table(result);
  console.log("-".repeat(50));
};

// Flood Fill test cases
const runFloodFillTests = () => {
  console.log("\n🔴 FLOOD FILL ALGORITHM 🔴\n");
  console.log("═".repeat(50));
  
  const image1 = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ];
  const result1 = floodFill([...image1.map((row) => [...row])], 1, 1, 2);
  printComparison(
    image1,
    result1,
    "Example 1: Basic flood fill (start: [1,1], newColor: 2)",
  );

  const image2 = [
    [0, 0, 0],
    [0, 1, 1],
    [0, 1, 0],
  ];
  const result2 = floodFill([...image2.map((row) => [...row])], 1, 1, 3);
  printComparison(
    image2,
    result2,
    "Example 2: Different starting point (start: [1,1], newColor: 3)",
  );

  const image3 = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ];
  const result3 = floodFill([...image3.map((row) => [...row])], 0, 0, 2);
  printComparison(image3, result3, "Example 3: Same color (no change expected)");

  const image4 = [[5]];
  const result4 = floodFill([...image4.map((row) => [...row])], 0, 0, 9);
  printComparison(image4, result4, "Example 4: Edge case - single pixel");
};

// Trap Rainwater test cases
const runTrapRainwaterTests = () => {
  console.log("\n🏔️  TRAPPED RAINWATER CALCULATOR 🏔️\n");
  console.log("═".repeat(50));
  
  const testCases = [
    { heights: [1, 2, 3, 4, 5], description: "Strictly increasing (no water)" },
    { heights: [0, 0, 0, 0], description: "Flat surface (no water)" },
    { heights: [3, 0, 0, 2, 0, 4], description: "Single peak with valleys" },
    { heights: [], description: "Empty array" },
    { heights: [3, 0, 1, 0, 4, 0, 2], description: "Classic case" },
  ];

  testCases.forEach((test, index) => {
    console.log(`\n📌 Test Case ${index + 1}: ${test.description}`);
    console.log(`   ${"─".repeat(100)}`);
    displayResults(test.heights);
  });

  console.log("\n📈 SUMMARY TABLE 📈\n");
  console.log("┌────────────┬─────────────────────────┬─────────────┐");
  console.log("│ Test Case  │ Heights                 │ Water Units │");
  console.log("├────────────┼─────────────────────────┼─────────────┤");

  testCases.forEach((test, index) => {
    const heightsStr = JSON.stringify(test.heights).slice(0, 23);
    const water = trapRainwater(test.heights);
    const paddedHeights = heightsStr.padEnd(23);
    const paddedWater = String(water).padStart(11);
    console.log(
      `│ Test ${(index + 1).toString().padEnd(2)}   │ ${paddedHeights} │ ${paddedWater} │`,
    );
  });
  console.log("└────────────┴─────────────────────────┴─────────────┘");
};

// Climbing Stairs test cases
const runClimbStairsTests = () => {
  console.log("\n🚶 CLIMBING STAIRS ALGORITHM 🚶");
  console.log("═".repeat(50));
  const testClimbingCases: number[] = [1, 2, 3, 4, 5, 6, 10];
  
  testClimbingCases.forEach((stair) => {
    displayClimbStairs(stair);
  });
};

// Jump Game test cases
const runJumpGameTests = () => {
  console.log("\n🎮 JUMP GAME ALGORITHM 🎮");
  console.log("═".repeat(50));
  const testJumpCases: number[][] = [
    [2, 3, 1, 1, 4], // true
    [3, 2, 1, 0, 4], // false
    [0], // true
    [3, 0, 0, 2, 0, 1], // true
  ];

  testJumpCases.forEach((nums) => {
    displayCanJump(nums);
  });
};

// Rod Cutting test cases
const runRodCuttingTests = () => {
  console.log("\n📏 ROD CUTTING ALGORITHM 📏");
  console.log("═".repeat(50));
  displayRodCutting([0, 1, 5, 8, 9, 10, 17, 17, 20], 8);
};

// Largest Rectangle in Histogram test cases
const runLargestRectangleTests = () => {
  console.log("\n📊 LARGEST RECTANGLE IN HISTOGRAM 📊");
  console.log("═".repeat(50));
  const testHistogramCases: number[][] = [
    [2, 1, 5, 6, 2, 3], // Classic case -> 10
    [2, 4], // -> 4
    [1, 1, 1, 1], // -> 4
    [1, 2, 3, 4, 5], // -> 9
    [5, 4, 3, 2, 1], // -> 9
    [1], // -> 1
    [0, 0, 0], // -> 0
    [6, 2, 5, 4, 5, 1, 6], // -> 12
  ];

  testHistogramCases.forEach((heights) => {
    displayLargestRectangle(heights);
  });
};

// Maximal Rectangle test cases
const runMaximalRectangleTests = () => {
  console.log("\n🔲 MAXIMAL RECTANGLE ALGORITHM 🔲");
  console.log("═".repeat(50));
  const testMaximalRectangleCases: string[][][] = [
    [["0"]], // Expected: 0
    [["1"]], // Expected: 1
    [
      ["1", "1"],
      ["1", "1"],
    ], // Expected: 4
    [
      ["1", "0", "1"],
      ["1", "1", "1"],
      ["0", "1", "1"],
    ], // Expected: 4
    [
      ["0", "1", "1", "0"],
      ["1", "1", "1", "1"],
      ["1", "1", "1", "1"],
      ["1", "1", "0", "0"],
    ], // Expected: 8
  ];

  testMaximalRectangleCases.forEach((matrix) => {
    displayMaximalRectangle(matrix);
  });
};

// Display menu
const showMenu = () => {
  console.log("\n" + "=".repeat(60));
  console.log("\n 📚 🎉 WELCOME TO MoonKnight ⚜️🐉 ALGORITHM VISUALIZER 🎉 📚");
  console.log("=".repeat(60));
  console.log("1. 🔴 Flood Fill Algorithm");
  console.log("2. 🏔️ Trapped Rainwater Calculator");
  console.log("3. 🚶 Climbing Stairs Algorithm");
  console.log("4. 🎮 Jump Game Algorithm");
  console.log("5. 📏 Rod Cutting Algorithm");
  console.log("6. 📊 Largest Rectangle in Histogram");
  console.log("7. 🔲 Maximal Rectangle Algorithm");
  console.log("8. 🎯 Run All Algorithms");
  console.log("0. ❌ Exit");
  console.log("=".repeat(60));
};

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Main function to handle user input
const runAlgorithm = (choice: string) => {
  console.clear();
  switch(choice) {
    case '1':
      runFloodFillTests();
      break;
    case '2':
      runTrapRainwaterTests();
      break;
    case '3':
      runClimbStairsTests();
      break;
    case '4':
      runJumpGameTests();
      break;
    case '5':
      runRodCuttingTests();
      break;
    case '6':
      runLargestRectangleTests();
      break;
    case '7':
      runMaximalRectangleTests();
      break;
    case '8':
      runFloodFillTests();
      runTrapRainwaterTests();
      runClimbStairsTests();
      runJumpGameTests();
      runRodCuttingTests();
      runLargestRectangleTests();
      runMaximalRectangleTests();
      break;
    case '0':
      console.log("\n👋 Goodbye! Thanks for exploring the algorithms!\n");
      rl.close();
      return false;
    default:
      console.log("\n❌ Invalid choice! Please enter a number between 0 and 8.\n");
  }
  return true;
};

// Prompt user for input
const promptUser = () => {
  showMenu();
  rl.question("\n👉 Enter your choice (0-8): ", (answer:any) => {
    const continueRunning = runAlgorithm(answer);
    if (continueRunning) {
      rl.question("\n\nPress Enter to continue...", () => {
        promptUser();
      });
    }
  });
};

// Start the application
console.clear();
console.log("\n🎉 WELCOME TO MoonKnight ⚜️🐉 ALGORITHM VISUALIZER 🎉");
console.log("=".repeat(60));
promptUser();