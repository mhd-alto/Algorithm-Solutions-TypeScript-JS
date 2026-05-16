const maximalRectangle = (matrix: string[][]): number => {
    if (!matrix.length || !matrix[0]!.length) return 0;
    
    const rows: number = matrix.length;
    const cols: number = matrix[0]!.length;
    const heights: number[] = new Array(cols).fill(0);
    let maxArea: number = 0;
    
    const histArea = (heights: number[]): number => {
        const stack: number[] = [];
        let area: number = 0;
        
        for (let i: number = 0; i <= heights.length; i++) {
            const h: number = i === heights.length ? 0 : heights[i]!;
            
            while (stack.length && h < heights[stack[stack.length - 1]!]!) {
                const height: number = heights[stack.pop()!]!;
                const width: number = stack.length === 0 ? i : i - stack[stack.length - 1]! - 1;
                area = Math.max(area, height * width);
            }
            stack.push(i);
        }
        return area;
    };
    
    for (let i: number = 0; i < rows; i++) {
        for (let j: number = 0; j < cols; j++) {
            heights[j] = matrix[i]![j] === '1' ? heights[j]! + 1 : 0;
        }
        maxArea = Math.max(maxArea, histArea([...heights]));
    }
    
    return maxArea;
};

//  display function
const displayMaximalRectangle = (matrix: string[][]): void => {
    console.log(`\nMatrix:`);
    matrix.forEach(row => {
        console.log(`  ${row.join(' ')}`);
    });
    
    const maxArea = maximalRectangle(matrix);
    console.log(`\nMax rectangle area: ${maxArea}`);
    
    // Visual representation
    console.log(`\nVisualization (1 = █, 0 = .):`);
    matrix.forEach(row => {
        const visualRow = row.map(cell => cell === '1' ? '█' : '.').join(' ');
        console.log(`  ${visualRow}`);
    });
};



export { maximalRectangle, displayMaximalRectangle};