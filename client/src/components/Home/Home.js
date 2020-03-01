import React from "react";
import axios from "axios";

function Home() {
    // Google Books API
    const apiKey = "AIzaSyB18FqBJ3VKubboJjAs_ZYn-2jNBsP1sEk";
    const q = "Harry Potter";
    axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
        .then(res => {
            console.log(res.data.items[6].volumeInfo);
        })
        .catch(err => console.log(err));

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;
