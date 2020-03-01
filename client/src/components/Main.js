import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Header from "./Header/Header";
import Saved from "./Saved/Saved";
import axios from "axios";
import Home from "./Home/Home";

function Main() {
    const [appState, changeState] = useState({ currentState: "home" });

    const handleLink = linkName => {
        changeState({ ...appState, currentState: linkName });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Header currentState={appState} changeLink={handleLink} />

                    {appState.currentState === "search" ? (
                        <SearchBar />
                    ) : appState.currentState === "saved" ? (
                        <Saved />
                    ) : appState.currentState === "home" ? (
                        <Home />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}

export default Main;
