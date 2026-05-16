const floodFill = (
    image: number[][] = [], 
    sr: number, 
    sc: number, 
    newColor: number
): number[][] => {
    // Store first row in a variable for TypeScript to track
    const firstRow = image[0];
    if (!image.length || !firstRow?.length) return image;
    
    const rows = image.length;
    const cols = firstRow.length;
    
    if (sr < 0 || sr >= rows || sc < 0 || sc >= cols) return image;
    
    // Fix 1: Use non-null assertion or check existence
    const targetRow = image[sr];
    if (!targetRow) return image;
    const oldColor = targetRow[sc];
    if (oldColor === undefined) return image;
    if (oldColor === newColor) return image;
    
    const dfs = (r: number, c: number): void => {
        // Fix 2: Check if row exists before accessing
        if (r < 0 || r >= rows || c < 0 || c >= cols) return;
        
        const currentRow = image[r];
        if (!currentRow) return;
        
        if (currentRow[c] !== oldColor) return;
        
        // Fix 3: Use non-null assertion after checks
        image[r]![c] = newColor;
        
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };
    
    dfs(sr, sc);
    return image;
};

export { floodFill };