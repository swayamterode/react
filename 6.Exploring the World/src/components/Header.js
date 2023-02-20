import { useState } from "react";
const logedInUser = () => {
  return false;
};
const Title = () => (
  //name exporting
  <h1 id="logo" key="h2">
    Hello Food
    {/* Put Logo later! */}
  </h1>
);

export const Header = () => {
  const [isLogedIn, setIsLoggeIn] = useState(false);
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
      <div className="login-logout">
        {isLogedIn ? (
          <button className="login" onClick={() => setIsLoggeIn(false)}>Logout</button>
        ) : (
          <button className="logout" onClick={() => setIsLoggeIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
