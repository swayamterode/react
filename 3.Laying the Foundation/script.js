import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="title">Learning JSX</h1>;

//React Component
//functional Component -> This is the new way of wrting the react functional component
//class based component -> This is the old way of writing the react functional component

//One way to write functional Component is like ES6 arrow function!
const HeaderComponent = () => {
  return (
    <div id="jsx1">
      <h2>JSX functional Component 1</h2>
    </div>
  );
};

//Another way of writing the functional Component is JS function!
const HeaderComponent2 = function () {
  return (
    <div id="jsx2">
      <h3>JSX functional Component 2</h3>
    </div>
  );
};

//Cool developer way!
const HeaderComponent3 = () => (
  <div>
    {console.log("Testing")}
    {heading}
    <HeaderComponent />
    {/** Both are same*/}
    {HeaderComponent2()}
    <h4>JSX functional, the cool Developer way!</h4>
  </div>
);
//rendering the fucntional Component
// to render the fucntional Component is done by wrapping the functional Component in  "< NameofTag/>"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent3 />);
