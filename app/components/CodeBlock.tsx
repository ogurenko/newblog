import * as React from "react";
import { Highlight, themes } from "prism-react-renderer";
import type { Language, PrismTheme } from "prism-react-renderer";

interface CodeBlockProps {
  className: Language;
  children: string;
  theme: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const codeThemes: { [key: string]: PrismTheme } = {
    light: themes.vsLight,
    dark: themes.nightOwl,
  };
  const language: Language = className?.replace(/language-/, "") as Language;

  return (
    <Highlight
      code={children.trim()}
      language={language}
      theme={themes.shadesOfPurple}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span>{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
