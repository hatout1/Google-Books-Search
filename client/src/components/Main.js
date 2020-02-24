import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Header from "./Header/Header";
import Book from "./Book/Book";
import axios from "axios";

function Main() {
    const [link, modifyLink] = useState({
        state: "search"
    });

    useEffect(() => {
        axios
            .get("/api/all")
            .then(res => console.log(res))
            .catch();
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
