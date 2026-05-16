import { floodFill } from "./floodFillAlgorithm.js";

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