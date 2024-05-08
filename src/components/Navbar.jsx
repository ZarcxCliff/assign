import React from "react";
import "./navbar.css";

const NavBar = ({ setShowLogin }) => {
    return (
        <div className="navbar">
            <div className="logo">Presbyterian Hopital</div>
            <div className="header">
                <ul>
                    <li id="home">Home </li>
                    <li id="contant">Contacts </li>
                    <li id="email">email </li>
                    <li id="about us">about us </li>
                    <li id="location">Location</li>
                </ul>
            </div>
            <button onClick={() => setShowLogin(true)}>signIn</button>
        </div>
    );
};

export default NavBar;
