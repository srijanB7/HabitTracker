import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { HabitProvider } from "./context/HabitContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HabitProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HabitProvider>
    </React.StrictMode>
);
