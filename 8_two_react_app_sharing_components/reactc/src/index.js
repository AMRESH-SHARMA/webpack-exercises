import ReactDOM from "react-dom/client";
import React from "react";
import ClinetCompo1 from "./components/clientCompo1/ClinetCompo1.js";

const App = () => {
    return (<>
        <h1>CIENT - React App</h1>
        <ClinetCompo1/>
    </>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);