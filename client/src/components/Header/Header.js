import React from "react";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
                <div className="container">
                    <a className="navbar-brand logo" href="/">
                        SANI STUDIO
                    </a>
                    <button
                        data-toggle="collapse"
                        className="navbar-toggler"
                        data-target="#navcol-1"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="index.html">
                                    Search
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="index.html">
                                    saved
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section
                className="clean-block clean-hero"
                style={{
                    backgroundImage: "url('assets/img/book-op-001.jpg')",
                    color: "rgba(14,34,45,0.85)",
                    minHeight: "500px"
                }}
            >
                <div className="text">
                    <br />
                    <br />
                    <br />
                    <h2>(REACT) Google Books Search</h2>
                    <p>Search for and Save Books of Interest</p>
                </div>
            </section>
        </header>
    );
}

export default Header;
