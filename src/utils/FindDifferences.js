import { longestCommonSubsequence } from './LongestCommonSubsequence';

export const findDifferences = (str1, str2) => {
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  const lcsMatrix = longestCommonSubsequence(arr1, arr2);

  const findResult = (i, j, result = []) => {
    while (i > 0 && j > 0) {
      if (arr1[i - 1] === arr2[j - 1]) {
        result.push({ type: 'common', char: arr1[i - 1] });
        i--;
        j--;
      } else if (lcsMatrix[i - 1][j] >= lcsMatrix[i][j - 1]) {
        result.push({ type: 'removed', char: arr1[i - 1] });
        i--;
      } else {
        result.push({ type: 'added', char: arr2[j - 1] });
        j--;
      }
    }

    while (i > 0) {
      result.push({ type: 'removed', char: arr1[i - 1] });
      i--;
    }

    while (j > 0) {
      result.push({ type: 'added', char: arr2[j - 1] });
      j--;
    }

    return result.reverse();
  };

  return findResult(arr1.length, arr2.length);
};
