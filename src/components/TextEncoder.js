import React, { useState } from 'react';

export default function TextEncoder() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const showAlert = (message, type = 'primary') => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      showAlert('📋 Copied to clipboard!', 'success');
    });
  };

  // Encoding functions
  const encodeBase64 = () => {
    try {
      const encoded = btoa(unescape(encodeURIComponent(inputText)));
      setOutputText(encoded);
      showAlert('✅ Encoded to Base64!', 'success');
    } catch (error) {
      showAlert('❌ Failed to encode Base64!', 'danger');
    }
  };

  const decodeBase64 = () => {
    try {
      const decoded = decodeURIComponent(escape(atob(inputText)));
      setOutputText(decoded);
      showAlert('✅ Decoded from Base64!', 'success');
    } catch (error) {
      showAlert('❌ Invalid Base64 string!', 'danger');
    }
  };

  const encodeURL = () => {
    const encoded = encodeURIComponent(inputText);
    setOutputText(encoded);
    showAlert('✅ URL encoded!', 'success');
  };

  const decodeURL = () => {
    try {
      const decoded = decodeURIComponent(inputText);
      setOutputText(decoded);
      showAlert('✅ URL decoded!', 'success');
    } catch (error) {
      showAlert('❌ Invalid URL encoding!', 'danger');
    }
  };

  const encodeHTML = () => {
    const htmlEntities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    const encoded = inputText.replace(/[&<>"']/g, char => htmlEntities[char]);
    setOutputText(encoded);
    showAlert('✅ HTML entities encoded!', 'success');
  };

  const decodeHTML = () => {
    const htmlEntities = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'"
    };
    const decoded = inputText.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, entity => htmlEntities[entity]);
    setOutputText(decoded);
    showAlert('✅ HTML entities decoded!', 'success');
  };

  const encodeHex = () => {
    const hex = Array.from(inputText)
      .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('');
    setOutputText(hex);
    showAlert('✅ Encoded to Hexadecimal!', 'success');
  };

  const decodeHex = () => {
    try {
      const hex = inputText.replace(/\s/g, '');
      if (hex.length % 2 !== 0) throw new Error('Invalid hex');
      const decoded = hex.match(/.{2}/g)
        .map(byte => String.fromCharCode(parseInt(byte, 16)))
        .join('');
      setOutputText(decoded);
      showAlert('✅ Decoded from Hexadecimal!', 'success');
    } catch (error) {
      showAlert('❌ Invalid hexadecimal string!', 'danger');
    }
  };

  const encodeBinary = () => {
    const binary = Array.from(inputText)
      .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
    setOutputText(binary);
    showAlert('✅ Encoded to Binary!', 'success');
  };

  const decodeBinary = () => {
    try {
      const binary = inputText.replace(/\s/g, '');
      if (binary.length % 8 !== 0) throw new Error('Invalid binary');
      const decoded = binary.match(/.{8}/g)
        .map(byte => String.fromCharCode(parseInt(byte, 2)))
        .join('');
      setOutputText(decoded);
      showAlert('✅ Decoded from Binary!', 'success');
    } catch (error) {
      showAlert('❌ Invalid binary string!', 'danger');
    }
  };

  const generateHash = async (algorithm) => {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(inputText);
      const hashBuffer = await crypto.subtle.digest(algorithm, data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      setOutputText(hashHex);
      showAlert(`✅ ${algorithm} hash generated!`, 'success');
    } catch (error) {
      showAlert(`❌ Failed to generate ${algorithm} hash!`, 'danger');
    }
  };

  const clearAll = () => {
    setInputText("");
    setOutputText("");
    showAlert('🗑️ All text cleared!', 'warning');
  };

  const swapTexts = () => {
    const temp = inputText;
    setInputText(outputText);
    setOutputText(temp);
    showAlert('🔄 Input and output swapped!', 'info');
  };

  const isDisabled = inputText.length === 0;

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

      {/* Header */}
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1 className="display-5 fw-bold text-primary mb-3">
            <i className="fas fa-code me-3"></i>
            Text Encoder/Decoder
          </h1>
          <p className="lead text-muted">
            Encode and decode text using various formats including Base64, URL, HTML entities, and more.
          </p>
        </div>
      </div>

      {/* Input/Output Section */}
      <div className="row mb-4">
        <div className="col-lg-6 mb-3">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                <i className="fas fa-pencil-alt me-2"></i>
                Input Text
              </h5>
            </div>
            <div className="card-body">
              <textarea
                className="form-control"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows="8"
                placeholder="Enter text to encode/decode..."
                style={{ fontSize: '14px', fontFamily: 'monospace' }}
              />
              <div className="mt-2 text-muted small">
                Characters: {inputText.length}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-3">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <i className="fas fa-file-alt me-2"></i>
                Output Text
              </h5>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => copyToClipboard(outputText)}
                disabled={!outputText}
                title="Copy to clipboard"
              >
                <i className="fas fa-copy"></i>
              </button>
            </div>
            <div className="card-body">
              <textarea
                className="form-control"
                value={outputText}
                readOnly
                rows="8"
                placeholder="Encoded/decoded text will appear here..."
                style={{ fontSize: '14px', fontFamily: 'monospace', backgroundColor: '#f8f9fa' }}
              />
              <div className="mt-2 text-muted small">
                Characters: {outputText.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <div className="btn-group me-2 mb-2" role="group">
                <button
                  className="btn btn-outline-secondary"
                  onClick={swapTexts}
                  disabled={!inputText && !outputText}
                  title="Swap input and output"
                >
                  <i className="fas fa-exchange-alt"></i>
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={clearAll}
                  disabled={!inputText && !outputText}
                  title="Clear all"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Encoding Options */}
      <div className="row">
        {/* Base64 Encoding */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0">
                <i className="fas fa-lock me-2"></i>
                Base64 Encoding
              </h5>
            </div>
            <div className="card-body">
              <p className="card-text text-muted mb-3">
                Encode and decode text using Base64 format, commonly used for data transmission.
              </p>
              <div className="d-grid gap-2">
                <button disabled={isDisabled} className="btn btn-outline-info" onClick={encodeBase64}>
                  <i className="fas fa-arrow-up me-2"></i>Encode to Base64
                </button>
                <button disabled={isDisabled} className="btn btn-outline-info" onClick={decodeBase64}>
                  <i className="fas fa-arrow-down me-2"></i>Decode from Base64
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* URL Encoding */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-warning text-dark">
              <h5 className="mb-0">
                <i className="fas fa-link me-2"></i>
                URL Encoding
              </h5>
            </div>
            <div className="card-body">
              <p className="card-text text-muted mb-3">
                Encode and decode text for safe use in URLs by converting special characters.
              </p>
              <div className="d-grid gap-2">
                <button disabled={isDisabled} className="btn btn-outline-warning" onClick={encodeURL}>
                  <i className="fas fa-arrow-up me-2"></i>URL Encode
                </button>
                <button disabled={isDisabled} className="btn btn-outline-warning" onClick={decodeURL}>
                  <i className="fas fa-arrow-down me-2"></i>URL Decode
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* HTML Entities */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-danger text-white">
              <h5 className="mb-0">
                <i className="fab fa-html5 me-2"></i>
                HTML Entities
              </h5>
            </div>
            <div className="card-body">
              <p className="card-text text-muted mb-3">
                Convert special characters to HTML entities for safe display in web pages.
              </p>
              <div className="d-grid gap-2">
                <button disabled={isDisabled} className="btn btn-outline-danger" onClick={encodeHTML}>
                  <i className="fas fa-arrow-up me-2"></i>Encode HTML
                </button>
                <button disabled={isDisabled} className="btn btn-outline-danger" onClick={decodeHTML}>
                  <i className="fas fa-arrow-down me-2"></i>Decode HTML
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hexadecimal */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0">
                <i className="fas fa-hashtag me-2"></i>
                Hexadecimal
              </h5>
            </div>
            <div className="card-body">
              <p className="card-text text-muted mb-3">
                Convert text to hexadecimal representation and vice versa.
              </p>
              <div className="d-grid gap-2">
                <button disabled={isDisabled} className="btn btn-outline-secondary" onClick={encodeHex}>
                  <i className="fas fa-arrow-up me-2"></i>To Hex
                </button>
                <button disabled={isDisabled} className="btn btn-outline-secondary" onClick={decodeHex}>
                  <i className="fas fa-arrow-down me-2"></i>From Hex
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Binary */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-dark text-white">
              <h5 className="mb-0">
                <i className="fas fa-binary me-2"></i>
                Binary
              </h5>
            </div>
            <div className="card-body">
              <p className="card-text text-muted mb-3">
                Convert text to binary representation (8-bit) and decode back to text.
              </p>
              <div className="d-grid gap-2">
                <button disabled={isDisabled} className="btn btn-outline-dark" onClick={encodeBinary}>
                  <i className="fas fa-arrow-up me-2"></i>To Binary
                </button>
                <button disabled={isDisabled} className="btn btn-outline-dark" onClick={decodeBinary}>
                  <i className="fas fa-arrow-down me-2"></i>From Binary
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hash Functions */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header text-white" style={{ backgroundColor: '#6f42c1' }}>
              <h5 className="mb-0">
                <i className="fas fa-fingerprint me-2"></i>
                Hash Functions
              </h5>
            </div>
            <div className="card-body">
              <p className="card-text text-muted mb-3">
                Generate cryptographic hashes of your text (one-way functions).
              </p>
              <div className="d-grid gap-2">
                <button disabled={isDisabled} className="btn btn-outline-primary" onClick={() => generateHash('SHA-1')}>
                  <i className="fas fa-key me-2"></i>SHA-1 Hash
                </button>
                <button disabled={isDisabled} className="btn btn-outline-primary" onClick={() => generateHash('SHA-256')}>
                  <i className="fas fa-key me-2"></i>SHA-256 Hash
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 