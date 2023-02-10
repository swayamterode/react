# Chapter 5: Let's get Hooked!

## What is the difference between Named export, Default export, and \* as export?

- In a `named export`, you give a specific name to an item when you export it from a file, and then use that same name to import it in another file. You can have multiple named exports in a single file, and import only the items that you need.

Example:

```js
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
```

How to import this:

```jsx
import { Header } from "./components/Header";
```

- In a `default export`, you don't give a specific name to an item when you export it from a file, but rather you use the keyword default to indicate that this is the default export. There can only be one default export in a file.

Example:

```jsx
const Header = () => {
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
export default Header; ///this is how we export the default 👌
```

How to import this?

```jsx
import Header from "./components/Header";
```

- The `* as` syntax is used when you want to import all exports from a file into a single object.

Example

```jsx
import * as XYZ from "./components/Header";

//using the * as

const AppLayout = () => {
  return (
    <React.Fragment>
      <XYZ.Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
```

## What is the importance of the config.js file?

- All the Hardcoded data is written in `config.js`. When we use the same code in multiple parts of the App we can write that piece of code in the `config.js`.

- Here we also prefer to export it as `named export` so that only the particular component can be used whenever needed.

## What are React Hooks?

- React Hooks in simpler words is just a normal function. It allows us to use `useState( )` and other Hooks as well.

## Why do we need a useState Hook?

- The main reason to use `useState()` is that JS can't update the variable in React so we use `useState()` with `useState()` which changes the variable/component. This functionality is not provided by JS in React.
