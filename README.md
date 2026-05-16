# Algorithm-Solutions-TypeScript-JS

TypeScript (Node.js CLI) implementations of classic algorithm problems, bundled into an interactive terminal menu.

## What this project is
This repository contains a small “algorithm visualizer” style CLI app. When you run it, you choose a number from a menu (1–8) and the program prints test results for that algorithm.

Each algorithm is implemented in its own file under `src/` and exported as functions. The entrypoint `src/index.ts` imports them and runs predefined test cases.

> Problems solved (7 menu options + run-all):
- Flood Fill
- Trapping Rain Water
- Climbing Stairs
- Jump Game
- Rod Cutting (maximum value)
- Largest Rectangle in Histogram
- Maximal Rectangle

## Tech stack
- **Language**: TypeScript
- **Runtime**: Node.js (terminal/console)
- **Input/Output**: `readline` for the menu, `console.log` / `console.table` for output
- **Build**: `tsc` compiles to `dist/`, then Node runs `dist/index.js`

## Folder structure
- `src/index.ts`
  - CLI menu + test case runners
- `src/floodFillAlgorithm.ts`
  - Flood fill implementation + returns modified matrix
- `src/trapRainwaterAlgorithm.ts`
  - Two-pointer water calculation + ASCII visualization
- `src/climbStairsAlgorithm.ts`
  - Iterative DP (1/2 step climbing)
- `src/canJumpAlgorithm.ts`
  - Greedy reachability for Jump Game
- `src/rodCuttingMaxAlgorithm.ts`
  - Dynamic programming for maximum obtainable value
- `src/largestRectangleInHistogramAlgorithm.ts`
  - Monotonic stack for largest rectangle area
- `src/maximalRectangle.ts`
  - Converts each row to a histogram and reuses the stack-based approach

## How to run
From `Algorithm-Solutions-TypeScript-JS/Algorithm-Solutions-TypeScript-JS`:

```bash
npm install
npm run dev
```

- The program clears the screen and shows a menu.
- Choose:
  - `1` Flood Fill
  - `2` Trapped Rainwater Calculator
  - `3` Climbing Stairs Algorithm
  - `4` Jump Game Algorithm
  - `5` Rod Cutting Algorithm
  - `6` Largest Rectangle in Histogram
  - `7` Maximal Rectangle Algorithm
  - `8` Run All Algorithms
  - `0` Exit

After each run, the program waits for **Enter** and then shows the menu again.

## Algorithms overview

### 1) Flood Fill (`floodFillAlgorithm.ts`)
**Problem**: Given an image grid, start from `(sr, sc)` and replace all pixels connected to the start pixel (4-directionally) that have the same original color with `newColor`.

**Approach**:
- Depth-first search (DFS)
- Recursively visits neighbors while the current cell equals the target `oldColor`
- Includes bounds checks and early returns (empty image, invalid start, same color)

**Output**: the (mutated) grid after filling.

**Complexity**:
- Time: `O(R*C)` in the worst case
- Space: `O(R*C)` due to recursion stack (worst case)

---

### 2) Trapping Rain Water (`trapRainwaterAlgorithm.ts`)
**Problem**: Given bar heights, compute how much water is trapped between them.

**Approach**:
- Two pointers (`left`, `right`)
- Maintain `leftMax` and `rightMax`
- Move the pointer with the smaller height, accumulating trapped water

**Visualization**:
- `displayResults()` prints an ASCII view where:
  - `█` represents walls
  - `≈` represents water
  - plus lines and index/height rows for readability

**Complexity**:
- Time: `O(n)`
- Space: `O(n)` (for water level visualization)

---

### 3) Climbing Stairs (`climbStairsAlgorithm.ts`)
**Problem**: You can climb 1 or 2 steps at a time. Count the number of distinct ways to reach step `n`.

**Approach**:
- Iterative dynamic programming
- Base cases for `n <= 2`
- Build up from `f(1)=1`, `f(2)=2` using `f(i)=f(i-1)+f(i-2)`

**Output**: number of ways (printed by `displayClimbStairs`).

**Complexity**:
- Time: `O(n)`
- Space: `O(1)`

---

### 4) Jump Game (`canJumpAlgorithm.ts`)
**Problem**: Given an array where each element indicates the max jump length from that position, determine if you can reach the last index.

**Approach**:
- Greedy tracking of the farthest reachable index (`maxReach`)
- If the current index is ever beyond `maxReach`, you’re stuck
- If `maxReach` reaches the last index, return true

**Complexity**:
- Time: `O(n)`
- Space: `O(1)`

---

### 5) Rod Cutting (Max Value) (`rodCuttingMaxAlgorithm.ts`)
**Problem**: Given prices for rod lengths, cut the rod to maximize total price.

**Approach**:
- Dynamic programming over rod length
- `dp[i]` = best value for length `i`
- Transition: `dp[i] = max(dp[i], price[j] + dp[i-j])`

**Input**:
- `price` is expected to be index-aligned (index `j` used as price for length `j`)

**Complexity**:
- Time: `O(n^2)`
- Space: `O(n)`

---

### 6) Largest Rectangle in Histogram (`largestRectangleInHistogramAlgorithm.ts`)
**Problem**: Given histogram bar heights, find the maximum rectangle area.

**Approach**:
- Monotonic increasing stack of indices
- Iterate through bars plus a sentinel pass (`i <= n`) by treating missing end height as `0`
- When the current height is lower, pop bars and compute area using the popped bar as the limiting height

**Output**:
- `largestRectangleArea(heights)` returns the maximum area
- `displayLargestRectangle()` prints a stack-based “bars” visualization

**Complexity**:
- Time: `O(n)`
- Space: `O(n)`

---

### 7) Maximal Rectangle (`maximalRectangle.ts`)
**Problem**: Given a binary matrix (`'0'`/`'1'`), find the area of the largest rectangle containing only `1`.

**Approach**:
- Treat each row as the base of a histogram:
  - Maintain `heights[j]`: consecutive `1`s ending at current row
- For each row, compute largest rectangle in that histogram using a monotonic stack (same core logic as histogram problem)

**Visualization**:
- Prints the matrix
- Then prints an ASCII visualization where `1` -> `█` and `0` -> `.`

**Complexity**:
- Time: `O(R*C)`
- Space: `O(C)`

## Notes about types
- The project is configured with `strict: true` and uses TypeScript’s non-null assertions (`!`) in places where indices have been checked.

## License
ISC (see `package.json`).

