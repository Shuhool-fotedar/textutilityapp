import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("converted to uppercase", "success");
  }
  const handleLowClick = () =>{
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("converted to lowercase", "success");
  }
  const handleclearclick = () =>{
    let newtext = "";
    setText(newtext)
    props.showAlert("cleared the text", "success");

  }
  const handlecopy = () =>{
    let newText = document.getElementById("myBox");
    newText.select()
    navigator.clipboard.writeText(newText.value);
    props.showAlert("copied the text to clipboard", "success");
  }
  const handleextraspaces = () => {
    let newText = text.split(/[ ]+/); //+ is used for matching previous item one or more times 
    setText(newText.join(" "))
    props.showAlert("extra spaces removed", "success");
    
  }
  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  const [text,setText] = useState(''); // inside use state bracket, we can set a by default string to appear in text variable, right now it is whitespace
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'light', color:props.mode==='dark'?'white':'#042743'}} id = "myBox" rows = "8" ></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
  <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
  <button className='btn btn-primary mx-2' onClick={handleclearclick}>Clear</button>
  <button className='btn btn-primary mx-2' onClick={handlecopy}>Copy</button>
  <button className='btn btn-primary mx-2' onClick={handleextraspaces}>Remove extraspaces</button>

    </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>your text summary</h1>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p> {0.008* text.split(" ").length} Minutes read </p>
    <h2>Preview here</h2>
    <p>{text.length>0?text:"Enter something to preview"}</p>
  </div>
    
  
    </>
  )
}