import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

// Function to add 'loaded' class after the page is fully loaded
const handlePageLoad = () => {
  document.body.classList.add('loaded');
};

// Add event listener for when the window loads
window.addEventListener('load', handlePageLoad);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
