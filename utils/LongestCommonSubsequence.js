export const longestCommonSubsequence = (arr1, arr2) => {
    const rows = arr1.length + 1;
    const cols = arr2.length + 1;

    const lcsMatrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    const fillMatrix = (i, j) => {
        if (i < rows) {
            if (j < cols) {
                lcsMatrix[i][j] = (i === 0 || j === 0)
                    ? 0
                    : (arr1[i - 1] === arr2[j - 1])
                        ? lcsMatrix[i - 1][j - 1] + 1
                        : Math.max(lcsMatrix[i - 1][j], lcsMatrix[i][j - 1]);
                return fillMatrix(i, j + 1);
            }
            return fillMatrix(i + 1, 0);
        }
        return lcsMatrix;
    };

    return fillMatrix(0, 0);
};