import React, { useState } from "react";
import axios from "axios";

function Home() {

    // Google Books API
    const apiKey = "AIzaSyB18FqBJ3VKubboJjAs_ZYn-2jNBsP1sEk";
    const q = "Harry Potter and the chamber of secrets";

    return (
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
            .then(res => {
                const bookResult = res.data.items
                // console.log(bookResult)

                bookResult.map(book => {
                    const bookData = {
                        title: book.volumeInfo.title,
                        subtitle: book.volumeInfo.subtitle,
                        publishedDate: book.volumeInfo.publishedDate,
                        description: book.volumeInfo.description,
                        title: book.volumeInfo.title,
                        imgLink: book.volumeInfo.imageLinks.thumbnail
                    }

                })
            })
            .catch(err => console.log(err)) +
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;
