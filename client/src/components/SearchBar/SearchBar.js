import React from "react";

function SearchBar() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col">
                    <h1>Book Search</h1>
                    <span>Book Name</span>
                    <div className="row padMar">
                        <div className="col padMar">
                            <div className="input-group">
                                <div className="input-group-prepend"></div>
                                <input
                                    className="form-control autocomplete"
                                    type="text"
                                    placeholder="Search"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-warning"
                                        type="button"
                                    >
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
