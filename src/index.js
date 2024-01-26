import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Board from "./Board.js";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Board />
  </StrictMode>,
);
