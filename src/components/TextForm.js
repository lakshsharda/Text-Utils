import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const numberOfSentences = () => {
    let sentenceCount = text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0).length;
    props.showAlert(`Number of sentences: ${sentenceCount}`, "info");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#333" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={numberOfSentences}>
          Count Sentences
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
        <p>{(0.008 * text.split(/\s+/).filter((word) => word.length > 0).length).toFixed(2)} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter some text to preview it here."}</p>
      </div>
    </>
  );
}
  