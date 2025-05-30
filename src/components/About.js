import React from 'react'

export default function About() {
    const features = [
        {
            icon: 'fas fa-text-height',
            title: 'Text Transformations',
            description: 'Convert text to uppercase, lowercase, capitalize, sentence case, alternating case, and inverse case with one click.',
            color: 'success'
        },
        {
            icon: 'fas fa-broom',
            title: 'Text Cleaning',
            description: 'Remove extra spaces, numbers, special characters, and empty lines to clean up your text efficiently.',
            color: 'warning'
        },
        {
            icon: 'fas fa-magic',
            title: 'Text Formatting',
            description: 'Add line numbers, reverse text, sort lines, shuffle words, and more advanced formatting options.',
            color: 'info'
        },
        {
            icon: 'fas fa-chart-bar',
            title: 'Text Analysis',
            description: 'Get detailed statistics including word count, character count, reading time, and frequency analysis.',
            color: 'dark'
        },
        {
            icon: 'fas fa-volume-up',
            title: 'Text-to-Speech',
            description: 'Listen to your text with built-in text-to-speech functionality for accessibility and convenience.',
            color: 'primary'
        },
        {
            icon: 'fas fa-download',
            title: 'Export Options',
            description: 'Copy to clipboard or download your processed text as a file for easy sharing and storage.',
            color: 'secondary'
        }
    ];

    const benefits = [
        'Free and easy to use',
        'No registration required',
        'Works offline',
        'Mobile responsive design',
        'Fast and efficient',
        'Privacy focused - no data stored'
    ];

    return (
        <div className="container my-5">
            {/* Hero Section */}
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <div className="bg-primary text-white rounded p-5 shadow-sm">
                        <h1 className="display-4 fw-bold mb-3">
                            <i className="fas fa-text-width me-3"></i>
                            About TextUtils
                        </h1>
                        <p className="lead mb-0">
                            A powerful, free online text manipulation tool designed to make text processing simple and efficient.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Statement */}
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-body text-center py-5">
                            <h2 className="card-title mb-4">Our Mission</h2>
                            <p className="card-text lead text-muted">
                                TextUtils was created to provide writers, developers, students, and professionals with a comprehensive
                                set of text manipulation tools. Whether you need to format text, analyze content, or perform bulk
                                transformations, our intuitive interface makes it quick and easy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="row mb-5">
                <div className="col-12">
                    <h2 className="text-center mb-5">Features</h2>
                    <div className="row g-4">
                        {features.map((feature, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="card h-100 shadow-sm border-0">
                                    <div className="card-body text-center p-4">
                                        <div className={`rounded-circle bg-${feature.color} text-white d-inline-flex align-items-center justify-content-center mb-3`}
                                            style={{ width: '60px', height: '60px' }}>
                                            <i className={`${feature.icon} fa-lg`}></i>
                                        </div>
                                        <h5 className="card-title">{feature.title}</h5>
                                        <p className="card-text text-muted">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="row mb-5">
                <div className="col-lg-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-header bg-success text-white">
                            <h4 className="mb-0">
                                <i className="fas fa-check-circle me-2"></i>
                                Why Choose TextUtils?
                            </h4>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="d-flex align-items-center mb-2">
                                        <i className="fas fa-check text-success me-3"></i>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-header bg-info text-white">
                            <h4 className="mb-0">
                                <i className="fas fa-lightbulb me-2"></i>
                                Use Cases
                            </h4>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="border-start border-primary border-3 ps-3">
                                        <h6 className="fw-bold text-primary">Content Writers</h6>
                                        <small className="text-muted">Format articles, clean up text, and analyze content structure</small>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="border-start border-success border-3 ps-3">
                                        <h6 className="fw-bold text-success">Developers</h6>
                                        <small className="text-muted">Process code comments, format documentation, and manipulate strings</small>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="border-start border-warning border-3 ps-3">
                                        <h6 className="fw-bold text-warning">Students</h6>
                                        <small className="text-muted">Analyze essays, count words, and format assignments</small>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="border-start border-danger border-3 ps-3">
                                        <h6 className="fw-bold text-danger">Professionals</h6>
                                        <small className="text-muted">Clean up data, format reports, and process bulk text</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics */}
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="text-center mb-4">By the Numbers</h3>
                            <div className="row text-center">
                                <div className="col-md-3 col-6 mb-3">
                                    <div className="border rounded p-3">
                                        <h4 className="text-primary mb-1">20+</h4>
                                        <small className="text-muted">Text Operations</small>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-3">
                                    <div className="border rounded p-3">
                                        <h4 className="text-success mb-1">100%</h4>
                                        <small className="text-muted">Free to Use</small>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-3">
                                    <div className="border rounded p-3">
                                        <h4 className="text-info mb-1">0</h4>
                                        <small className="text-muted">Data Stored</small>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-3">
                                    <div className="border rounded p-3">
                                        <h4 className="text-warning mb-1">∞</h4>
                                        <small className="text-muted">Text Length</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technology Stack */}
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-header bg-secondary text-white">
                            <h4 className="mb-0">
                                <i className="fas fa-code me-2"></i>
                                Built With
                            </h4>
                        </div>
                        <div className="card-body">
                            <div className="row text-center">
                                <div className="col-md-3 col-6 mb-3">
                                    <div className="p-3">
                                        <i className="fab fa-react fa-3x text-info mb-2"></i>
                                        <h6>React 18</h6>
                                        <small className="text-muted">Modern UI Framework</small>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-3">
                                    <div className="p-3">
                                        <i className="fab fa-bootstrap fa-3x text-primary mb-2"></i>
                                        <h6>Bootstrap 5</h6>
                                        <small className="text-muted">Responsive Design</small>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-3">
                                    <div className="p-3">
                                        <i className="fab fa-js-square fa-3x text-warning mb-2"></i>
                                        <h6>JavaScript ES6+</h6>
                                        <small className="text-muted">Modern Language Features</small>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-3">
                                    <div className="p-3">
                                        <i className="fas fa-mobile-alt fa-3x text-success mb-2"></i>
                                        <h6>Mobile First</h6>
                                        <small className="text-muted">Responsive Design</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="row">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-body text-center py-5">
                            <h3 className="card-title mb-3">Ready to Transform Your Text?</h3>
                            <p className="card-text text-muted mb-4">
                                Start using TextUtils today and experience the power of efficient text manipulation.
                            </p>
                            <a href="/" className="btn btn-primary btn-lg">
                                <i className="fas fa-arrow-right me-2"></i>
                                Get Started Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
