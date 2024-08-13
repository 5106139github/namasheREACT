import React from "react";
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  "div",
  { className: "parent" },
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", {}, "this is my h1 tag"),
    React.createElement("h2", {}, "mt h2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
