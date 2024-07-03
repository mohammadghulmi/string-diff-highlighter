declare module 'string-diff-highlighter' {
    import { FC } from 'react';
  
    interface StringDiffHighlighterProps {
      str1: string;
      str2: string;
      highlightColor?: string;
      layout?: 'horizontal' | 'vertical';
    }
  
    const StringDiffHighlighter: FC<StringDiffHighlighterProps>;
  
    export default StringDiffHighlighter;
  }