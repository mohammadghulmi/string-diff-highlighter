import { findDifferences } from './FindDifferences';

export const  highlightDifferences = (str1, str2, highlightColor) => {
    const differences = findDifferences(str1, str2);

    const highlightedStr1 = differences.reduce((acc, diff, index) => {
        const prevIndex = index === 0 ? 0 : differences[index - 1].index + 1;
        if (diff.type === 'removed') {
            return [
                ...acc,
                <span key={prevIndex}>{str1.slice(prevIndex, diff.index)}</span>,
                <span key={`r${diff.index}`} style={{ color: highlightColor }}>{diff.char}</span>
            ];
        }
        return acc;
    }, []);

    const highlightedStr2 = differences.reduce((acc, diff, index) => {
        const prevIndex = index === 0 ? 0 : differences[index - 1].index + 1;
        if (diff.type === 'added') {
            return [
                ...acc,
                <span key={prevIndex}>{str2.slice(prevIndex, diff.index)}</span>,
                <span key={`a${diff.index}`} style={{ color: highlightColor }}>{diff.char}</span>
            ];
        }
        return acc;
    }, []);
    
    const lastIndex1 = differences.length ? differences[differences.length - 1].index + 1 : 0;
    const lastIndex2 = differences.length ? differences[differences.length - 1].index + 1 : 0;
    
    highlightedStr1.push(<span key={lastIndex1}>{str1.slice(lastIndex1)}</span>);
    highlightedStr2.push(<span key={lastIndex2}>{str2.slice(lastIndex2)}</span>);

    return { highlightedStr1, highlightedStr2 };
}