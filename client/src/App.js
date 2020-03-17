import React, { useState } from "react";
import axios from "axios";

function App() {
    // App State hooks
    const [apiResult, setApiResult] = useState([]);
    const [book, setBook] = useState("");
    const [apiKey, setApiKey] = useState(
        "AIzaSyAakxYQit1DRIQag9AXDESHnUc2P6lNwBk"
    );

    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${book}&filter=free-ebooks&key=${apiKey}`;

    const handleChange = e => {
        const book = e.target.value;
        setBook(book);
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .get(apiUrl)
            .then(res => {
                console.log(res.data.items);
                setApiResult(res.data.items);
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="App">
            <div className="container">
                <div className="jumbotron text-center">
                    <h1 className="display-4 font-weight-bold text-info">
                        REACT Google Books
                    </h1>
                </div>
                <div className="input-group mb-3">
                    <input
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Search for"
                        type="text"
                    />
                    <div className="input-group-append">
                        <button
                            onClick={handleSubmit}
                            className="btn btn-outline-secondary"
                        >
                            submit
                        </button>
                    </div>
                </div>
                <ul>
                    {apiResult.map(book => (
                        <li key={book.id}>
                            <a href={book.volumeInfo.previewLink}>
                                <img
                                    src={book.volumeInfo.imageLinks.thumbnail}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
