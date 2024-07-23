import React, { useState } from "react";

function UserInput(props) {
  const [inputText, setInputText] = useState("");

  const handleKey = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter TODO"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleKey}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default UserInput;
