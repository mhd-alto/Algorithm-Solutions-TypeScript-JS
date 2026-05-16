const climbStairs = (n: number): number => {
    if (n <= 2) return n;
    let prev1: number = 1;
    let prev2: number = 2;
    for (let i: number = 3; i <= n; i++) {
        let curr: number = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
    }
    return prev2;
}

// display function
const displayClimbStairs = (n: number): void => {
    console.log(`\nInput: ${n} stairs`);
    
    if (n <= 0) {
        console.log(`Error: n must be positive`);
        return;
    }
    
    const ways = climbStairs(n);
    console.log(`Ways to climb: ${ways}`);
    
    // Show the sequence pattern
    console.log(`\nSequence:`);
    for (let i = 1; i <= Math.min(n, 10); i++) {
        console.log(`  f(${i}) = ${climbStairs(i)}`);
    }
    
    if (n > 10) {
        console.log(`  ...`);
        console.log(`  f(${n}) = ${ways}`);
    }
};



// Export
export {displayClimbStairs};