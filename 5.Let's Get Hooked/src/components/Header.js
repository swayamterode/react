const Title = () => (
  //name exporting
  <h1 id="logo" key="h2">
    Hello Food
    {/* Put Logo later! */}
  </h1>
);

export const Header = () => {
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

export default Header;