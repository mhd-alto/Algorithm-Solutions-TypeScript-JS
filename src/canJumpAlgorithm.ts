const canJump = (nums: number[]): boolean => {
    let maxReach: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]!);
        if (maxReach >= nums.length - 1) return true;
    }
    return true;
}

// Simple display function
const displayCanJump = (nums: number[]): void => {
    console.log(`\nArray: [${nums.join(', ')}]`);
    
    const result = canJump(nums);
    console.log(`Can jump to end: ${result ? 'YES' : 'NO'}`);
    
    // Show the reasoning
    let maxReach: number = 0;
    console.log(`\nStep-by-step:`);
    for (let i: number = 0; i < nums.length; i++) {
        if (i > maxReach) {
            console.log(`  Position ${i}: Cannot proceed further (stuck)`);
            break;
        }
        maxReach = Math.max(maxReach, i + nums[i]!);
        console.log(`  Position ${i}: value=${nums[i]}, maxReach=${maxReach}`);
        if (maxReach >= nums.length - 1) {
            console.log(`  -> Can reach the end!`);
            break;
        }
    }
};



export {displayCanJump};