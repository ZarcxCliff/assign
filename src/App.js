import "./App.css";
import Body from "./components/Body";
import LoginIn from "./components/LoginIn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <>
            {showLogin ? <LoginIn setShowLogin={setShowLogin} /> : <></>}
            <div className="App">
                <Navbar setShowLogin={setShowLogin} />
                <Body />
                <Footer />
            </div>
        </>
    );
}

export default App;
