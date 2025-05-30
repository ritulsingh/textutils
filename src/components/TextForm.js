import React, { useState, useRef } from 'react';

export default function TextForm() {
  const [text, setText] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const textareaRef = useRef(null);

  // Enhanced alert system
  const showAlert = (message, type = 'primary') => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };

  const changeText = (event) => {
    setText(event.target.value);
  };

  // Text transformation functions
  const changeUpCase = () => {
    setText(text.toUpperCase());
    showAlert('✅ Converted to Uppercase!', 'success');
  };

  const changeLoCase = () => {
    setText(text.toLowerCase());
    showAlert('✅ Converted to Lowercase!', 'success');
  };

  const handleCapitalize = () => {
    let newText = text.split(" ").map(el =>
      el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
    ).join(" ");
    setText(newText);
    showAlert('✅ Text Capitalized!', 'success');
  };

  const handleAlternatingCase = () => {
    let newText = text.split('').map((char, index) =>
      index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
    ).join('');
    setText(newText);
    showAlert('✅ Alternating Case Applied!', 'success');
  };

  const handleInverseCase = () => {
    let newText = text.split('').map(char =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
    setText(newText);
    showAlert('✅ Case Inverted!', 'success');
  };

  const handleSentenceCase = () => {
    // eslint-disable-next-line no-useless-escape
    let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
    setText(newText);
    showAlert('✅ Converted to Sentence Case!', 'success');
  };

  // Text cleaning functions
  const removeExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    showAlert('✅ Extra spaces removed!', 'success');
  };

  const removeNumbers = () => {
    let newText = text.replace(/\d/g, '');
    setText(newText);
    showAlert('✅ Numbers removed!', 'success');
  };

  const removeSpecialChars = () => {
    let newText = text.replace(/[^a-zA-Z0-9\s]/g, '');
    setText(newText);
    showAlert('✅ Special characters removed!', 'success');
  };

  const removeEmptyLines = () => {
    let newText = text.replace(/^\s*[\r\n]/gm, '');
    setText(newText);
    showAlert('✅ Empty lines removed!', 'success');
  };

  // Text formatting functions
  const addLineNumbers = () => {
    let lines = text.split('\n');
    let newText = lines.map((line, index) => `${index + 1}. ${line}`).join('\n');
    setText(newText);
    showAlert('✅ Line numbers added!', 'success');
  };

  const reverseText = () => {
    setText(text.split('').reverse().join(''));
    showAlert('✅ Text reversed!', 'success');
  };

  const reverseWords = () => {
    setText(text.split(' ').reverse().join(' '));
    showAlert('✅ Words reversed!', 'success');
  };

  const sortLines = () => {
    let lines = text.split('\n').sort();
    setText(lines.join('\n'));
    showAlert('✅ Lines sorted alphabetically!', 'success');
  };

  const shuffleWords = () => {
    let words = text.split(' ');
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    setText(words.join(' '));
    showAlert('✅ Words shuffled!', 'success');
  };

  // Utility functions
  const clearText = () => {
    setText("");
    showAlert('🗑️ Text cleared!', 'warning');
  };

  const copyText = () => {
    navigator.clipboard.writeText(text).then(() => {
      showAlert('📋 Text copied to clipboard!', 'info');
    }, (err) => {
      showAlert('❌ Failed to copy text!', 'danger');
    });
  };

  const speak = () => {
    if (text.trim()) {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      showAlert('🔊 Speaking text!', 'info');
    } else {
      showAlert('⚠️ No text to speak!', 'warning');
    }
  };

  const downloadText = () => {
    if (text.trim()) {
      const element = document.createElement("a");
      const file = new Blob([text], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = "textutils-output.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('📥 Text downloaded!', 'success');
    } else {
      showAlert('⚠️ No text to download!', 'warning');
    }
  };

  const selectAllText = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      showAlert('✅ All text selected!', 'info');
    }
  };

  // Text analysis functions
  const getWordCount = () => text.split(/\s+/).filter(n => n !== '').length;
  const getCharCount = () => text.length;
  const getCharCountNoSpaces = () => text.replace(/\s/g, '').length;
  const getLineCount = () => text.split('\n').length;
  const getParagraphCount = () => text.split('\n\n').filter(p => p.trim() !== '').length;
  const getSentenceCount = () => text.split(/[.!?]+/).filter(s => s.trim() !== '').length;
  const getReadingTime = () => Math.ceil(getWordCount() / 200); // Average reading speed: 200 WPM

  // Word frequency analysis
  const getWordFrequency = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const frequency = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
    return Object.entries(frequency)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);
  };

  // Get most common characters
  const getCharFrequency = () => {
    const chars = text.toLowerCase().replace(/\s/g, '').split('');
    const frequency = {};
    chars.forEach(char => {
      if (char.match(/[a-z]/)) {
        frequency[char] = (frequency[char] || 0) + 1;
      }
    });
    return Object.entries(frequency)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);
  };

  const isDisabled = text.length === 0;

  return (
    <div className="container my-4">
      {/* Alert */}
      {alertMessage && (
        <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
          <strong>{alertMessage}</strong>
          <button
            type="button"
            className="btn-close"
            onClick={() => setAlertMessage("")}
            aria-label="Close"
          ></button>
        </div>
      )}

      {/* Main Text Input Card */}
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">
            <i className="fas fa-edit me-2"></i>
            Text Editor
          </h4>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="text" className="form-label fw-bold">
              Enter your text below:
            </label>
            <textarea
              ref={textareaRef}
              className="form-control"
              value={text}
              onChange={changeText}
              id="text"
              rows="12"
              placeholder="Start typing or paste your text here..."
              style={{ fontSize: '16px', lineHeight: '1.5' }}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group" role="group">
              <button
                disabled={isDisabled}
                className="btn btn-outline-success"
                onClick={selectAllText}
                title="Select All"
              >
                <i className="fas fa-check-square"></i>
              </button>
              <button
                disabled={isDisabled}
                className="btn btn-outline-info"
                onClick={copyText}
                title="Copy Text"
              >
                <i className="fas fa-copy"></i>
              </button>
              <button
                disabled={isDisabled}
                className="btn btn-outline-primary"
                onClick={downloadText}
                title="Download Text"
              >
                <i className="fas fa-download"></i>
              </button>
              <button
                disabled={isDisabled}
                className="btn btn-outline-warning"
                onClick={speak}
                title="Speak Text"
              >
                <i className="fas fa-volume-up"></i>
              </button>
              <button
                disabled={isDisabled}
                className="btn btn-outline-danger"
                onClick={clearText}
                title="Clear Text"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Text Transformations */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">
                <i className="fas fa-magic me-2"></i>
                Text Transformations
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-2">
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-primary w-100" onClick={changeUpCase}>
                    UPPERCASE
                  </button>
                </div>
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-primary w-100" onClick={changeLoCase}>
                    lowercase
                  </button>
                </div>
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-primary w-100" onClick={handleCapitalize}>
                    Capitalize
                  </button>
                </div>
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-primary w-100" onClick={handleSentenceCase}>
                    Sentence case
                  </button>
                </div>
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-secondary w-100" onClick={handleAlternatingCase}>
                    aLtErNaTiNg
                  </button>
                </div>
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-secondary w-100" onClick={handleInverseCase}>
                    iNVERSE cASE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Cleaning */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-warning text-dark">
              <h5 className="mb-0">
                <i className="fas fa-broom me-2"></i>
                Text Cleaning
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-2">
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-warning w-100" onClick={removeExtraSpaces}>
                    Remove Extra Spaces
                  </button>
                </div>
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-warning w-100" onClick={removeNumbers}>
                    Remove Numbers
                  </button>
                </div>
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-warning w-100" onClick={removeSpecialChars}>
                    Remove Special Chars
                  </button>
                </div>
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-warning w-100" onClick={removeEmptyLines}>
                    Remove Empty Lines
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Formatting */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0">
                <i className="fas fa-text-height me-2"></i>
                Text Formatting
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-2">
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-info w-100" onClick={addLineNumbers}>
                    Add Line Numbers
                  </button>
                </div>
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-info w-100" onClick={reverseText}>
                    Reverse Text
                  </button>
                </div>
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-info w-100" onClick={reverseWords}>
                    Reverse Words
                  </button>
                </div>
                <div className="col-6">
                  <button disabled={isDisabled} className="btn btn-outline-info w-100" onClick={sortLines}>
                    Sort Lines
                  </button>
                </div>
                <div className="col-12">
                  <button disabled={isDisabled} className="btn btn-outline-secondary w-100" onClick={shuffleWords}>
                    Shuffle Words
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Statistics */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-dark text-white">
              <h5 className="mb-0">
                <i className="fas fa-chart-bar me-2"></i>
                Text Statistics
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-3 text-center">
                <div className="col-4">
                  <div className="border rounded p-2">
                    <h6 className="text-primary mb-0">{getWordCount()}</h6>
                    <small className="text-muted">Words</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border rounded p-2">
                    <h6 className="text-success mb-0">{getCharCount()}</h6>
                    <small className="text-muted">Characters</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border rounded p-2">
                    <h6 className="text-warning mb-0">{getCharCountNoSpaces()}</h6>
                    <small className="text-muted">Chars (no spaces)</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border rounded p-2">
                    <h6 className="text-info mb-0">{getLineCount()}</h6>
                    <small className="text-muted">Lines</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border rounded p-2">
                    <h6 className="text-secondary mb-0">{getParagraphCount()}</h6>
                    <small className="text-muted">Paragraphs</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border rounded p-2">
                    <h6 className="text-danger mb-0">{getSentenceCount()}</h6>
                    <small className="text-muted">Sentences</small>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="mb-0">
                  <i className="fas fa-clock me-2"></i>
                  <strong>Reading Time:</strong> {getReadingTime()} minute(s)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Word Frequency Analysis */}
        {text && (
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-header bg-purple text-white" style={{ backgroundColor: '#6f42c1' }}>
                <h5 className="mb-0">
                  <i className="fas fa-list-ol me-2"></i>
                  Top Words
                </h5>
              </div>
              <div className="card-body">
                {getWordFrequency().length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th>Word</th>
                          <th>Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getWordFrequency().map(([word, count], index) => (
                          <tr key={index}>
                            <td>{word}</td>
                            <td><span className="badge bg-primary">{count}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-muted text-center">No words to analyze</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Character Frequency */}
        {text && (
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-header bg-secondary text-white">
                <h5 className="mb-0">
                  <i className="fas fa-font me-2"></i>
                  Top Characters
                </h5>
              </div>
              <div className="card-body">
                {getCharFrequency().length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th>Character</th>
                          <th>Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getCharFrequency().map(([char, count], index) => (
                          <tr key={index}>
                            <td><code>{char}</code></td>
                            <td><span className="badge bg-secondary">{count}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-muted text-center">No characters to analyze</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Text Preview */}
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h5 className="mb-0">
                <i className="fas fa-eye me-2"></i>
                Text Preview
              </h5>
            </div>
            <div className="card-body">
              <div className="border rounded p-3" style={{
                minHeight: '150px',
                backgroundColor: '#f8f9fa',
                maxHeight: '300px',
                overflowY: 'auto'
              }}>
                {text ? (
                  <pre style={{
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'inherit',
                    margin: 0
                  }}>
                    {text}
                  </pre>
                ) : (
                  <p className="text-muted text-center m-0">
                    Your text preview will appear here...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


