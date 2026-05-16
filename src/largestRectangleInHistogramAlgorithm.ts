const largestRectangleArea = (heights: number[]): number => {
    const stack: number[] = [];
    let maxArea: number = 0;
    
    for (let i: number = 0; i <= heights.length; i++) {
        const h: number = i === heights.length ? 0 : heights[i]!;
        
        while (stack.length && h < heights[stack[stack.length - 1]!]!) {
            const height: number = heights[stack.pop()!]!;
            const width: number = stack.length === 0 ? i : i - stack[stack.length - 1]! - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
};

// Simple display function
const displayLargestRectangle = (heights: number[]): void => {
    const maxArea = largestRectangleArea(heights);
    console.log(`\nHistogram: [${heights.join(', ')}]`);
    console.log(`Max rectangle area: ${maxArea}`);
    
    // Show visual representation
    const maxHeight = Math.max(...heights);
    console.log(`\nVisualization:`);
    
    for (let level = maxHeight; level > 0; level--) {
        let row = '';
        for (let i = 0; i < heights.length; i++) {
            if (heights[i]! >= level) {
                row += '█ ';
            } else {
                row += '  ';
            }
        }
        console.log(`  ${row}`);
    }
    console.log(`  ${'-'.repeat(heights.length * 2)}`);
};

export { largestRectangleArea, displayLargestRectangle };