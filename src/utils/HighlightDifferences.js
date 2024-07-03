import { findDifferences } from './FindDifferences';
import React from 'react';

export const highlightDifferences = (str1, str2, highlightColor) => {
  const differences = findDifferences(str1, str2);

  const highlightedStr1 = [];
  const highlightedStr2 = [];

  differences.forEach((diff, index) => {
    if (diff.type === 'common') {
      highlightedStr1.push(<span key={`common-${index}`}>{diff.char}</span>);
      highlightedStr2.push(<span key={`common-${index}`}>{diff.char}</span>);
    } else if (diff.type === 'removed') {
      highlightedStr1.push(<span key={`removed-${index}`} style={{ color: highlightColor }}>{diff.char}</span>);
      highlightedStr2.push(<span key={`removed-${index}`}></span>);
    } else if (diff.type === 'added') {
      highlightedStr1.push(<span key={`added-${index}`}></span>);
      highlightedStr2.push(<span key={`added-${index}`} style={{ color: highlightColor }}>{diff.char}</span>);
    }
  });

  return { highlightedStr1, highlightedStr2 };
};