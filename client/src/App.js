import React, { useState } from "react";
import axios from "axios";

function App() {
    // const [appState, setState] = useState("search");
    const [apiResult, setApiResult] = useState([]);
    const [book, setBook] = useState("javascript");
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
                <div className="jumbotron">
                    <h1>REACT Google Books</h1>
                </div>
                <input
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                />
                <button onClick={handleSubmit}>submit</button>
                <ul>
                    {apiResult.map(book => (
                        <li key={book.id}>
                            <a href={book.volumeInfo.previewLink}>
                                <img
                                    src={book.volumeInfo.imageLinks.thumbnail}
                                    alt=""
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
