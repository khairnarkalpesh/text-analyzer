import React, { useState } from 'react'

function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnFocus = () => {
        setText("");
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);

    }

    const [text, setText] = useState('Enter Text Here');

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="mytext" className="form-label">{props.heading}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} onFocus={handleOnFocus} id="mytext" rows="8"></textarea>
 
            </div>

            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upper Case</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lower Case</button>

            <h2>Your summary</h2>
            <p>{text.split(" ").length} Words, {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <p className='my-2'>{text}</p>
        </div>
    )
}

export default TextForm
