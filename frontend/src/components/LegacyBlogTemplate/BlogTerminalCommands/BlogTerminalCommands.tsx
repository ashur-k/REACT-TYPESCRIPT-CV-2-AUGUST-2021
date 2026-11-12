import React, { FunctionComponent, useState } from "react";

import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

import "./BlogTerminalCommands.css";

type BlogTerminalCommand = {
  id: number | string;
  command: string;
};

type BlogTerminalCommandsProps = {
  commands?: BlogTerminalCommand[] | null;
};

const BlogTerminalCommands: FunctionComponent<BlogTerminalCommandsProps> = ({ commands }) => {
  const [copiedCommand, setCopiedCommand] = useState<number | string | null>(null);

  if (!commands?.length) {
    return null;
  }

  const copyCommand = async (command: string, id: number | string) => {
    try {
      await navigator.clipboard.writeText(command);

      setCopiedCommand(id);

      window.setTimeout(() => {
        setCopiedCommand((current) => (current === id ? null : current));
      }, 2000);
    } catch (error) {
      console.error("Unable to copy terminal command:", error);
    }
  };

  return (
    <section className="legacy-blog-terminal">
      <div className="legacy-blog-terminal__header">
        <div className="legacy-blog-terminal__window-controls">
          <span className="terminal-dot terminal-dot--red"></span>
          <span className="terminal-dot terminal-dot--yellow"></span>
          <span className="terminal-dot terminal-dot--green"></span>
        </div>

        <span className="legacy-blog-terminal__title">Terminal</span>
      </div>

      <div className="legacy-blog-terminal__body">
        {commands.map((command) => {
          const isCopied = copiedCommand === command.id;

          return (
            <div key={command.id} className="legacy-blog-terminal__command">
              <div className="legacy-blog-terminal__prompt">
                <span>$</span>
              </div>

              <pre>
                <code>{command.command}</code>
              </pre>

              <button
                type="button"
                className="legacy-blog-terminal__copy"
                onClick={() => copyCommand(command.command, command.id)}
                aria-label="Copy command"
                title={isCopied ? "Copied" : "Copy command"}
              >
                {isCopied ? <CheckRoundedIcon /> : <ContentCopyRoundedIcon />}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogTerminalCommands;
