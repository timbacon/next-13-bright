import { Code } from 'bright';
import React from 'react';

function SyntaxHighlightWrapper({ children, ...delegated }) {
    return (
        <Code {...delegated} className='code-snippet'>
            {children}
        </Code>
    );
}

export default SyntaxHighlightWrapper;
