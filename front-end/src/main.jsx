import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./contexts/index.js";
import { ProductContextProvider } from "./contexts/index.js";
import {CartContextProvider} from'./contexts/index.js';

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Router>
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
        <App />
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
      </Router>
  </React.StrictMode>
);
