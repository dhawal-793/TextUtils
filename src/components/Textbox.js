import React, { useState } from "react";

export default function Textbox(props) {
  let currStyle = {
    color: props.mode === "light" ? "black" : "white"
  };
  const handelUperCase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const handelLowerCase = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
  };
  const handelCaptalize = () => {
    let text1 = text.split(" ");
    let newtext = "";
    text1.forEach((element) => {
      // element =
      //   element.substring(0, 1).toUpperCase() +
      //   element.substring(1).toLowerCase();
      newtext +=
        element.substring(0, 1).toUpperCase() +
        element.substring(1).toLowerCase() +
        " ";
    });
    settext(newtext.slice(0, -1));
  };
  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
  };
  const handleExtraLines = () => {
    let newtext = text.replace(/\s+/g, " ").trim();
    settext(newtext);
  };
  const handelReset = () => {
    settext("");
    handelWordCount();
    handelCharCount();
    handelSentCount();
  };
  const handelCopy = () => {
    navigator.clipboard.writeText(text);
    alert(text.length>0?"Text copied to clipboard":"Enter text below to copy");
  };
  const handelSentCount = () => {
    let _text = text.replace(/\s+/g, " ").trim();
    // let _text = text.split(/[ ]+/).join(" ").trim();
    if (document.getElementById("count_sent").checked === true) {
      let count = _text.split(".").length;
      if (_text === "") {
        count = 0;
      }
      setcountsent("Total number of sentances are : " + count);
    } else {
      setcountsent("");
    }
  };
  const handelWordCount = () => {
    let _text = text.replace(/\s+/g, " ").trim();
    if (document.getElementById("count_words").checked === true) {
      if (_text === "") {
        setcountword("Number of word is : 0");
      }
      let count = _text.split(" ").length;
      if (count < 2) {
        setcountword("Number of word is : " + count);
      } else {
        setcountword("Total number of words are : " + count);
      }
    } else {
      setcountword("");
    }
  };
  const handelCharCount = () => {
    let _text = text.replace(/\s+/g, " ").trim();
    if (document.getElementById("count_chars").checked === true) {
      let count = _text.length;
      if (count < 2) {
        setcountchar("Number of character is : " + count);
      } else {
        setcountchar("Total number of characters are : " + count);
      }
    } else {
      setcountchar("");
    }
  };
  const handelPreview1 = () => {
    setpreview_text2("");
    setpreview_text1(
      text.length > 0 ? text : "Enter text above to preview it here"
    );
  };
  const handelPreview2 = () => {
    setpreview_text1("");
    setpreview_text2(
      text.length > 0 ? text : "Enter text above to preview it here"
    );
  };
  const textchange = (event) => {
    settext(event.target.value);
    handelWordCount();
    handelCharCount();
    handelSentCount();
  };
  const [text, settext] = useState("");
  const [preview_text1, setpreview_text1] = useState("");
  const [preview_text2, setpreview_text2] = useState("");
  const [count_word, setcountword] = useState("");
  const [count_char, setcountchar] = useState("");
  const [count_sent, setcountsent] = useState("");
  return (
    <>
      <div className="container my-3">
        <center>
          <h2>Text Analyzer</h2>
        </center>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          placeholder="Enter Your text here"
          onChange={textchange}
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor: props.mode === "light" ? "white" : "rgb(72,78,84)",
          }}
        ></textarea>
      </div>
      <div className="container">
        <center>
          <button
            type="button"
            class={`btn btn-${props.mode === "light" ? "dark" : "light"} my-2 mr-2`}
            // style={{color: props.mode === "light" ? "black" : "white"}}
            onClick={handelUperCase}
          >
            CONVERT TO UPPERCASE
          </button>
          <button
            type="button"
            class={`btn btn-${props.mode === "light" ? "dark" : "light"} my-2 mx-2`}
            onClick={handelLowerCase}
          >
            convert to lowerCase
          </button>
          <button
            type="button"
            class={`btn btn-${props.mode === "light" ? "dark" : "light"} my-2 mx-2`}
            onClick={handelCaptalize}
          >
            Capatalize Each Word
          </button>
          <button
            type="button"
            class={`btn btn-${props.mode === "light" ? "dark" : "light"} my-2 mx-2`}
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            type="button"
            class={`btn btn-${props.mode === "light" ? "dark" : "light"} my-2 mx-2`}
            onClick={handleExtraLines}
          >
            Remove Extra Spaces with Lines
          </button>
          <button
            type="button"
            class={`btn btn-${props.mode === "light" ? "dark" : "light"} my-2 mx-2`}
            onClick={handelCopy}
          >
            Copy to clipboard
          </button>
          <button
            type="button"
            class={`btn btn-${props.mode === "light" ? "dark" : "light"} my-2 mx-2`}
            onClick={handelReset}
          >
            Reset
          </button>
          <button
            type="button"
            class={`btn btn-${props.mode === "light" ? "dark" : "light"} my-2 mx-2`}
            onClick={handelPreview1}
          >
            Preview As It Is
          </button>
          <button
            type="button"
            class={`btn btn-${props.mode === "light" ? "dark" : "light"} my-2 mx-2`}
            onClick={handelPreview2}
          >
            Preview
          </button>
        </center>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            class="custom-control-input"
            id="count_words"
            onChange={handelWordCount}
          />
          <label className="custom-control-label count_char" for="count_words">
            Count Words
          </label>
        </div>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            class="custom-control-input"
            id="count_chars"
            onChange={handelCharCount}
          />
          <label className="custom-control-label count_char" for="count_chars">
            Count Characters
          </label>
        </div>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            class="custom-control-input"
            id="count_sent"
            onChange={handelSentCount}
          />
          <label className="custom-control-label count_char" for="count_sent">
            Count Sentances
          </label>
        </div>
      </div>
      <div className="container">
        <h3>Summary</h3>
        <p>{count_word}</p>
        <p>{count_char}</p>
        <p>{count_sent}</p>
      </div>
      <div className="container">
        <pre id="preview1" style={currStyle}>{preview_text1}</pre>
        <p id="preview2">{preview_text2}</p>
        <pre>{}</pre>
      </div>
    </>
  );
}

// $( ".count_char" ).slider({
//     if()
// });
