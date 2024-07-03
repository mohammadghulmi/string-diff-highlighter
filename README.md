# string-diff-highlighter

A React component that highlights the differences between two strings.

## Installation

Install the package using npm:

```bash
npm install string-diff-highlighter

# string-diff-highlighter

A React component that highlights the differences between two strings.

## Installation

Install the package using npm:

```bash
npm install string-diff-highlighter
```

## Usage

Import the component and use it in your React application:

```jsx
import React from 'react';
import StringDiffHighlighter from 'string-diff-highlighter';

function App() {
    return (
        <div className="App">
            <h1>String Diff Highlighter Test</h1>
            <StringDiffHighlighter
                str1="Hello, World!"
                str2="Hallo, Wrld!"
                highlightColor="blue"
                layout="horizontal" // or "vertical"
            />
            <StringDiffHighlighter
                str1="Another example"
                str2="Another sample"
                highlightColor="red"
                layout="vertical"
            />
        </div>
    );
}

export default App;
```

## Props

The `StringDiffHighlighter` component accepts the following props:

- `str1` (string, required): The first string to compare.
- `str2` (string, required): The second string to compare.
- `highlightColor` (string, optional): The color used to highlight the differences. Defaults to "yellow".
- `layout` (string, optional): The layout of the highlighted differences. Can be "horizontal" or "vertical". Defaults to "horizontal".

Feel free to modify the props according to your needs.

