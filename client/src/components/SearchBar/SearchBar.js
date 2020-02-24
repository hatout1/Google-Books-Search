import React from "react";

function SearchBar() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div class="col">
                    <h1>Book Search</h1>
                    <span>Book Name</span>
                    <div class="row padMar">
                        <div class="col padMar">
                            <div class="input-group">
                                <div class="input-group-prepend"></div>
                                <input
                                    className="form-control autocomplete"
                                    type="text"
                                    placeholder="Search"
                                />
                                <div className="input-group-append">
                                    <button
                                        classNameName="btn btn-warning"
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
