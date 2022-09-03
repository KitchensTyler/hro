import React from "react"
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client"
import App from "./App"

import  DataContextProvider  from "./context/DataContext";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <BrowserRouter>
            <DataContextProvider>
                <App />
            </DataContextProvider>
        </BrowserRouter>
    </React.StrictMode>

);