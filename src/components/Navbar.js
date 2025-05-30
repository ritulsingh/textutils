import React from 'react'
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
                    <i className="fas fa-text-width me-2" style={{ fontSize: '1.5rem' }}></i>
                    <span style={{ fontSize: '1.25rem' }}>{props.title}</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link fw-semibold ${location.pathname === '/' ? 'active' : ''}`} to="/">
                                <i className="fas fa-home me-1"></i>
                                Text Editor
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link fw-semibold ${location.pathname === '/encoder' ? 'active' : ''}`} to="/encoder">
                                <i className="fas fa-code me-1"></i>
                                Encoder/Decoder
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link fw-semibold ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
                                <i className="fas fa-info-circle me-1"></i>
                                About
                            </Link>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center">
                        <span className="text-light me-3 d-none d-md-block">
                            <i className="fas fa-magic me-1"></i>
                            <small>Text Transformation Made Easy</small>
                        </span>

                        <div className="btn-group" role="group">
                            <button className="btn btn-outline-light btn-sm" title="GitHub Repository">
                                <i className="fab fa-github"></i>
                            </button>
                            <button className="btn btn-outline-light btn-sm" title="Share">
                                <i className="fas fa-share-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
};

Navbar.defaultProps = {
    title: 'TextUtils',
    about: 'About us'
};
