import { floodFill } from "./floodFillAlgorithm.js";
import { trapRainwater,displayResults } from "./trapRainwaterAlgorithm.js";

console.log("floodFill:");

// Helper function to print before and after
const printComparison = (original: number[][], result: number[][], title: string) => {
    console.log(`\n${title}:`);
    console.log("Original:");
    console.table(original);
    console.log("After flood fill:");
    console.table(result);
    console.log("-".repeat(50));
};

// Example 1: Basic flood fill
const image1 = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
];
const result1 = floodFill([...image1.map(row => [...row])], 1, 1, 2);
printComparison(image1, result1, "Example 1: Basic flood fill (start: [1,1], newColor: 2)");

// Example 2: Different starting point
const image2 = [
    [0, 0, 0],
    [0, 1, 1],
    [0, 1, 0]
];
const result2 = floodFill([...image2.map(row => [...row])], 1, 1, 3);
printComparison(image2, result2, "Example 2: Different starting point (start: [1,1], newColor: 3)");

// Example 3: Same color (no change)
const image3 = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2]
];
const result3 = floodFill([...image3.map(row => [...row])], 0, 0, 2);
printComparison(image3, result3, "Example 3: Same color (no change expected)");

// Example 4: Edge case - single pixel
const image4 = [[5]];
const result4 = floodFill([...image4.map(row => [...row])], 0, 0, 9);
printComparison(image4, result4, "Example 4: Edge case - single pixel");


console.log('\n🏔️  TRAPPED RAINWATER CALCULATOR 🏔️\n');
console.log('═'.repeat(50));

// Test cases with descriptions
const testCases = [
    { heights: [0,1,0,2,1,0,1,3,2,1,2,1], description: "Classic case" },
    { heights: [1,2,3,4,5], description: "Strictly increasing (no water)" },
    { heights: [0,0,0,0], description: "Flat surface (no water)" },
    { heights: [3,0,0,2,0,4], description: "Single peak with valleys" },
    { heights: [], description: "Empty array" },
    { heights: [4,2,0,3,2,5], description: "Two peaks with valley" },
    { heights: [5,0,5], description: "Symmetrical trapping" },
    { heights: [2,0,0,0,2], description: "Deep valley" }
];

// Display all test cases
testCases.forEach((test, index) => {
    console.log(`\n📌 Test Case ${index + 1}: ${test.description}`);
    console.log(`   ${'─'.repeat(40)}`);
    displayResults(test.heights);
});

// Alternative: Simple tabular format
console.log('\n📈 SUMMARY TABLE 📈\n');
console.log('┌────────────┬─────────────────────────┬─────────────┐');
console.log('│ Test Case  │ Heights                 │ Water Units │');
console.log('├────────────┼─────────────────────────┼─────────────┤');

testCases.forEach((test, index) => {
    const heightsStr = JSON.stringify(test.heights).slice(0, 23);
    const water = trapRainwater(test.heights);
    const paddedHeights = heightsStr.padEnd(23);
    const paddedWater = String(water).padStart(11);
    console.log(`│ Test ${(index + 1).toString().padEnd(2)}   │ ${paddedHeights} │ ${paddedWater} │`);
});

console.log('└────────────┴─────────────────────────┴─────────────┘');

// Or if you want a super simple formatted output:
console.log('\n✨ SIMPLE FORMATTED OUTPUT ✨\n');

const simpleTestCases = [
    { heights: [0,1,0,2,1,0,1,3,2,1,2,1], expected: 6 },
    { heights: [1,2,3,4,5], expected: 0 },
    { heights: [0,0,0,0], expected: 0 },
    { heights: [3,0,0,2,0,4], expected: 10 },
    { heights: [], expected: 0 },
    { heights: [4,2,0,3,2,5], expected: 9 }
];

simpleTestCases.forEach(({ heights, expected }) => {
    const result = trapRainwater(heights);
    const status = result === expected ? '✓' : '✗';
    console.log(`${status} [${heights.join(', ')}] → ${result} ${result !== expected ? `(expected ${expected})` : ''}`);
});