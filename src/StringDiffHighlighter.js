import React from 'react';
import { highlightDifferences } from './utils/HighlightDifferences';
import './StringDiffHighlighter.scss';

const StringDiffHighlighter = ({ str1, str2, highlightColor = 'yellow', layout = 'vertical' }) => {
    const { highlightedStr1, highlightedStr2 } = highlightDifferences(str1, str2, highlightColor);

    return (
        <div className={`diff-container ${layout}`}>
            <div className="diff-box">
                {highlightedStr1}
            </div>
            <div className="diff-box">
                {highlightedStr2}
            </div>
        </div>
    );
};

export default StringDiffHighlighter;