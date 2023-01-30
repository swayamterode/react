import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="title" key="h2">
    Food Villa
  </h1>
);
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return {};
};

//rendering the fucntional Component
// to render the fucntional Component is done by wrapping the functional Component in  "< NameofTag/>"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
