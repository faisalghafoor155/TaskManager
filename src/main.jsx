/** @format */

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { DndProvider } from "react-dnd";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </DndProvider>
  </Provider>,
);
