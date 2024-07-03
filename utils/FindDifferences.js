export const findDifferences = (str1, str2) => {
    const arr1 = str1.split('');
    const arr2 = str2.split('');

    const lcsMatrix = longestCommonSubsequence(arr1, arr2);

    const findResult = (i, j, result) => {
        if (i > 0 && j > 0) {
            if (arr1[i - 1] === arr2[j - 1]) {
                return findResult(i - 1, j - 1, result);
            } else if (lcsMatrix[i - 1][j] > lcsMatrix[i][j - 1]) {
                return findResult(i - 1, j, [{ type: 'removed', index: i - 1, char: arr1[i - 1] }, ...result]);
            } else {
                return findResult(i, j - 1, [{ type: 'added', index: j - 1, char: arr2[j - 1] }, ...result]);
            }
        } else if (i > 0) {
            return findResult(i - 1, j, [{ type: 'removed', index: i - 1, char: arr1[i - 1] }, ...result]);
        } else if (j > 0) {
            return findResult(i, j - 1, [{ type: 'added', index: j - 1, char: arr2[j - 1] }, ...result]);
        } else {
            return result.reverse();
        }
    };

    return findResult(arr1.length, arr2.length, []);
};