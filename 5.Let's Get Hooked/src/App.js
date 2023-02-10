import React from "react";
import ReactDOM from "react-dom/client";

//default import
// import Header from "./components/Header";

//named import
//import { Title } from "./components/Header";

//now lets learn some cool stuff 🔥
//import Header, { Title } from "./components/Header";
//another way!
// import * as XYZ from "./components/Header";
// in AppLayout write {XYZ.Header} in place of {Header}

//**since we have used Title inside the Header component we don't need to import title again so we just import Header */
import Header from "./components/Header";
//importing Body
import Body from "./components/Body";
import Footer from "./components/footer"; //importing Footer

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
