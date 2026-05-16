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
    
    console.log(`\n📊 Input:  ${heightsStr}`);
    console.log(`💧 Water trapped: ${water} units`);
    
    if (heights.length === 0) {
        return;
    }
    
    // Calculate water levels at each position
    const maxHeight = Math.max(...heights);
    
    // Create water heights array
    let left = 0;
    let right = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    const waterHeight = new Array(heights.length).fill(0);
    
    while (left < right) {
        let hightsLeft = heights[left]!
        let hightsRight = heights[right]!
        if (hightsLeft < hightsRight) {
            if (hightsLeft >= leftMax) {
                leftMax = hightsLeft;
            } else {
                waterHeight[left] = leftMax - hightsLeft;
            }
            left++;
        } else {
            if (hightsRight >= rightMax) {
                rightMax = hightsRight;
            } else {
                waterHeight[right] = rightMax - hightsRight;
            }
            right--;
        }
    }
    
    console.log(`\nVisualization (█ = wall, ≈ = water):`);
    
    // Draw from top to bottom
    for (let level = maxHeight; level > 0; level--) {
        let row = '';
        for (let i = 0; i < heights.length; i++) {
            const wallHeight = heights[i]!;
            const waterAtPos = waterHeight[i];
            
            if (wallHeight >= level) {
                // Wall (even at water level, wall takes precedence)
                row += '█';
            } else if (wallHeight + waterAtPos >= level) {
                // Water
                row += '≈';
            } else {
                // Empty space
                row += ' ';
            }
            
            // Add separator between columns for better visibility
            if (i < heights.length - 1) row += ' ';
        }
        console.log(`  ${row}`);
    }
    
    // Draw bottom line with indices
    console.log('  ' + '─'.repeat(heights.length * 2 - 1));
    
    // Show indices
    let indexRow = '';
    for (let i = 0; i < heights.length; i++) {
        indexRow += `${i}`;
        if (i < heights.length - 1) indexRow += ' ';
    }
    console.log(`  ${indexRow}`);
    
    // Show heights
    let heightRow = '';
    for (let i = 0; i < heights.length; i++) {
        heightRow += `${heights[i]}`;
        if (i < heights.length - 1) heightRow += ' ';
    }
    console.log(`  ${heightRow}`);
    
    // Show water on top
    let waterRow = '';
    for (let i = 0; i < heights.length; i++) {
        waterRow += waterHeight[i] > 0 ? `+${waterHeight[i]}` : ' 0';
        if (i < heights.length - 1) waterRow += ' ';
    }
    console.log(`  Water: ${waterRow}`);
    console.log('');
}

export {trapRainwater,displayResults};