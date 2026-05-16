const rodCuttingMax = (price: number[], n: number): number => {
    if (n === 0) return 0;
    if (price.length < n + 1) {
        throw new Error("Price array must have length at least n+1");
    }
    
    const dp: number[] = new Array(n + 1).fill(0);
    for (let i: number = 1; i <= n; i++) {
        for (let j: number = 1; j <= i; j++) {
            dp[i] = Math.max(dp[i]!, price[j]! + dp[i - j]!);
        }
    }
    return dp[n]!;
}
const displayRodCutting = (price: number[], n: number): void => {
    const maxValue = rodCuttingMax(price, n);
    console.log(`\nRod length: ${n}`);
    console.log(`Prices: [${price.slice(1).join(', ')}]`);
    console.log(`Max value: ${maxValue}`);
};

export { rodCuttingMax, displayRodCutting};