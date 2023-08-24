import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//The only thing that strict mode does is that during development it will render all components twice in order to find certain bugs.
//Also, React will check if we're using outdated parts of the React API.
