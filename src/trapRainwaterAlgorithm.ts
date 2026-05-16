const trapRainwater = (heights: number[]): number => {
    // Use non-null assertion if you're certain array exists
    if (heights.length === 0) {
        return 0;
    }

    let left: number = 0;
    let right: number = heights.length - 1;
    let leftMax: number = 0;
    let rightMax: number = 0;
    let water: number = 0;

    while (left < right) {
        const leftHeight: number = heights[left]!; // Non-null assertion
        const rightHeight: number = heights[right]!; // Non-null assertion
        
        if (leftHeight < rightHeight) {
            if (leftHeight >= leftMax) {
                leftMax = leftHeight;
            } else {
                water += leftMax - leftHeight;
            }
            left++;
        } else {
            if (rightHeight >= rightMax) {
                rightMax = rightHeight;
            } else {
                water += rightMax - rightHeight;
            }
            right--;
        }
    }

    return water;
}

const displayResults = (heights: number[]): void => {
    const water = trapRainwater(heights);
    const heightsStr = JSON.stringify(heights);
    
    // Create a visual representation of the heights
    const maxHeight = Math.max(...heights, 0);
    console.log(`\n📊 Input:  ${heightsStr}`);
    console.log(`💧 Water trapped: ${water} units`);
    
    // Simple bar chart visualization
    if (heights.length > 0 && maxHeight > 0) {
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
        console.log(`  ${Array(heights.length * 2).join('─')}`);
    }
    console.log('─'.repeat(50));
}

export {trapRainwater,displayResults};