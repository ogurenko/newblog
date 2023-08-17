"use client";

import * as React from "react";
import { Highlight, themes } from "prism-react-renderer";
import type { Language, PrismTheme } from "prism-react-renderer";

interface CodeBlockProps {
  className: Language;
  children: string;
  theme: string;
}

const CodeBlock = ({ children, className }: CodeBlockProps): JSX.Element => {
  const codeThemes: { [key: string]: PrismTheme } = {
    light: themes.vsLight,
    dark: themes.nightOwl,
  };
  const language: Language = className?.replace(/language-/, "") as Language;

  return (
    <Highlight
      code={String(children).trim()}
      language={language}
      theme={themes.shadesOfPurple}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });

            return (
              <div key={i} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};
export default CodeBlock;
