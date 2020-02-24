import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Header from "./Header/Header";
import Book from "./Book/Book";

function Main() {
    const [link, modifyLink] = useState({
        state: "search"
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Header />
                    <SearchBar />
                    {console.log(link.state)}
                    <Book />
                </div>
            </div>
        </div>
    );
}

export default Main;
