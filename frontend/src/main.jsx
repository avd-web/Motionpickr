import React from "react";
import ReactDOM from "react-dom/client";
import AppRoot from "./appRoot";

// import Register from "./pages/Register";
// import Login from "./pages/Login";
import Genre from "./pages/Genre";
import "./styles/MAINstyles.css";
import "./styles/normalize.css";

/* todo
remove the entire browser router tree
replace it with the AppRoot component

profit


*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoot/>
  </React.StrictMode>
);
