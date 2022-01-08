import React, { useState } from 'react'
import copy from "copy-to-clipboard";
function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    let handleClearClick = () => {
        setText("");
    }
    const handleOnFocus = () => {
        setText("");
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);

    }

    const copyToClipboard = () => {
        copy(text);
        alert(`You have copied "${text}"`);
    }

    const [text, setText] = useState('');

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="mytext" className="form-label">{props.heading}</label>
            <textarea  spellCheck="true" className="form-control" placeholder='Enter your text here' value={text} onChange={handleOnChange} id="mytext" rows="8"></textarea>
 
            </div>

            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upper Case</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lower Case</button>
            <button className='btn btn-primary mx-1' onClick={copyToClipboard}>Copy Text</button>
            <button className='btn btn-danger mx-1' onClick={handleClearClick}>Clear Text</button>

            <h2 className='my-2'>Your summary</h2>
            <p>{text.split(" ").length} Words, {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>

            <h3 className='my-2'>Preview</h3>
            <p className='my-2'>{text}</p>
        </div>
    )
}

export default TextForm
