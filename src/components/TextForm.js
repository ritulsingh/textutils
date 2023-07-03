import React from 'react'
import { useState } from 'react';

export default function TextForm() {
  // Alert Popover
  const alert = (message, type) => {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div><b>${message}</b></div>`,
      '</div>'
    ].join('')
    setTimeout(() => {
      wrapper.innerHTML = "";
    }, 1500);
    alertPlaceholder.append(wrapper)
  }
  const [text, setText] = useState("");
  const changeText = (event) => {
    setText(event.target.value);
  }
  // change the text into upper case
  const changeUpCase = () => {
    setText(text.toUpperCase());
    alert('Converted to Uppercase!', 'primary')
  }
  // Change the text into the lower case
  const changeLoCase = () => {
    setText(text.toLowerCase());
    alert('Converted to Lowercase!', 'primary')
  }
  // Clear the text Area
  const clearText = () => {
    setText("");
    alert('Done!', 'primary')
  }
  // Speak the message
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    alert('Speak!', 'primary')
  }
  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    alert('Converted to Capitalize!', 'primary')
  }

  // Copy Text to clipboard
  const copyText = () => {
    navigator.clipboard.writeText(text).then(function () {
      alert('Text Copied!', 'primary')
    }, function (err) {
      console.error("Could not copy text: ", err);
    });
  }

  return (
    <>
      <div className="mb-3 container my-3">
        <div id="liveAlertPlaceholder" style={{ height: '62px' }}></div>
        <div className='text-wrap'>
          <label htmlFor="text" className="form-label fs-5 fw-bold">Enter Your Text</label>
          <textarea className="form-control" value={text} onChange={changeText} id="text" rows="10"></textarea>
        </div>
        <div className='my-3'>
          <button disabled={text.length === 0} type="button" id="liveAlertBtn" className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
          <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={changeUpCase}>Change To Uppercase</button>
          <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={changeLoCase}>Change To Lowercase</button>
          <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize</button>
          <button disabled={text.length === 0} type="button" className="btn btn-danger mx-1 my-1" onClick={clearText}>Clear Text</button>
          <button disabled={text.length === 0} type="button" className="btn btn-warning mx-1 my-1" onClick={speak}>Speak</button>
        </div>
        <p><b>{text.split(/\s+/).filter(function (n) { return n !== '' }).length}</b> words <b>{text.length}</b> characters</p>
        <p>Estimated read time: <b>{Math.ceil(text.split(' ').filter(function (n) { return n !== '' }).length / 150)} minute(s)</b></p>
        <p><b>Preview Text: </b>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  )
}


