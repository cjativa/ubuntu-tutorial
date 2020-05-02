import React, { Component, useState, useEffect, useRef } from "react";

export const Body = props => {
  // Refs we'll end up using
  const inputRef = useRef(null);
  const terminalContainerRef = useRef(null);

  // Get the config from props
  const { config } = props;

  // Some stately variables
  const [inputs, setInputs] = useState([]);
  const [input, setInput] = useState("");

  /** Scrolls our terminal to the bottom as more input is entered */
  useEffect(() => {
    const updateScrollToBottom = () => {
      const terminalContent = terminalContainerRef.current;
      terminalContent.scrollTo({
        top: terminalContent.scrollHeight,
        behavior: "smooth"
      });
    };

    updateScrollToBottom();
  }, [inputs]);

  /** Handles input changes in ther terminal input line */
  const onInputChange = event => {
    const value = event.target.value;
    setInput(value);
  };

  /** Handles input being submitted */
  const submitInput = () => {
    if (input === "clear") {
      setInputs([]);
    } else {
      const newInputs = [...inputs, input];
      setInputs(newInputs);
    }

    setInput("");
  };

  useEffect(() => {
    /** Listens for the enter key being pressed on main keyboard/numpad */
    const enterKeyListener = event => {
      const code = event.code || event.key;
      if (code === "NumpadEnter" || code === "Enter") {
        submitInput();
      }
    };

    // Registers the enter key listener on mount
    window.addEventListener("keypress", enterKeyListener);
    return () => {
      // Unregisters the enter key listener on unmount
      window.removeEventListener("keypress", enterKeyListener);
    };
  }, [input]);

  /** Generates the `Me@Ubuntu:~$`  */
  const startOfLine = () => {
    const { name, computerName } = config;

    return (
      <span className="command__green" style={{ marginRight: "5px" }}>
        {`${name}@${computerName}`}
        <span className="command__white">:</span>
        <span className="command__blue">~</span>
        <span className="command__white">$</span>
      </span>
    );
  };

  /** Generates the lines of previous input */
  const generatePreviousInputLines = () => {
    return (
      <div>
        {/** Renders the list of previously entered inputs */}
        {inputs.map((input, index) => {
          return (
            <div key={index}>
              <div>
                {startOfLine()}{input}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className="body"
      onClick={() => inputRef.current.focus()}
      style={{ overflowY: "auto", height: "100%", whiteSpace: "pre-line" }}
      ref={terminalContainerRef}
    >
      {/** Renders the previous input */}
      {generatePreviousInputLines()}

      {/** Renders the command input line  */}
      <div className="input-container">
        {startOfLine()}
        <input
          className="terminal-input"
          type="text"
          autoFocus
          onChange={onInputChange}
          spellCheck={false}
          value={input}
          ref={inputRef}
        />
      </div>
    </div>
  );
};
