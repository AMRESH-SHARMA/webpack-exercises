import ReactDOM from "react-dom/client";
import React from "react";
import Paragraph from "./components/Paragraph.js";

const App = () => {
    return (
        <>
            <h1>This is my React app host</h1>
            <Paragraph/>
        </>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);