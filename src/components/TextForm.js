/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLwClick = ()=>{
       // console.log("Uppercase clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }
    const handlecLClick = ()=>{
       // console.log("Uppercase clicked" + text);
        let newText = text.replace(text , "");
        setText(newText);
        props.showAlert("Every Thing is cleared", "danger");
    }
    const reverseFullText = ()=>{
       // console.log("Uppercase clicked" + text);
        let newText = text.split('').reverse().join('');
        setText(newText)
        props.showAlert("Text is Reversed", "warning");
    }
    const handleOnChange = (event)=>{
      //  console.log("handleOnChange clicked" )
        setText(event.target.value);
        // props.showAlert("Clicked", "success");
    }
    const [text, setText] = useState('Enter text here') ;
   
  return (
    <>
    <div className="Container">
        <h1>
            {props.heading} 
        </h1>
      <div className="mb-3">
        <textarea style={{backgroundColor : props.mode=== 'dark'?'gray':'white'}} 
          className="form-control" value={text} onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary me-3" onClick={handleUpClick}>Convert Upper Case</button>
      <button className="btn btn-primary me-3" onClick={handleLwClick}>Convert Lower Case</button>
      <button className="btn btn-danger me-3" onClick={handlecLClick}>Clear</button>
      <button className="btn btn-warning me-3" onClick={reverseFullText}>Reverse</button>
    </div>

    <div className="container my-4">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something in this textarea"}</p>
    </div>
    </>
  );
}
