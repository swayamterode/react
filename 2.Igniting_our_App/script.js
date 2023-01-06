import React from "react";
import ReactDOM from "react-dom/client";
const myElement = React.createElement(
  "h1",
  { id: "root" },
  "This is Heading 1"
);
const myElement2 = React.createElement(
    "h2",
    {
        id: "root"
    },
    "This is heading 2"
)
const heading = React.createElement(
    "div",
    {
        id: "root"
    },
    [myElement,myElement2]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
