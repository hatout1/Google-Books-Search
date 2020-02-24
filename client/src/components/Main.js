import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Header from "./Header/Header";
import Book from "./Book/Book";

function Main() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Header />
                    <SearchBar />
                    <Book />
                </div>
            </div>
        </div>
    );
}

export default Main;
