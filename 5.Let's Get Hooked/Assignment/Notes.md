<div align = "center">

# Chapter 5. Let's get Hooked 🪝

</div>

## File Structuring in REACT

REACT does not have any opinion on how we put our files in the folder.

But having a convenient folder with some specific feature of the app and adding that file into that particular folder is a good practice as it is more understandable and more convenient to search the files when we have thousands of files.

[read more](https://reactjs.org/docs/faq-structure.html)

---

## Export default and named Export

There are two ways of exporting a component/variable:

1. export default
2. named export

---

#### How to export default?

💡 `export default` exports only one component.

```js
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

---

#### How to import a component that is default exported?

In `App.js` or the Main Js file import this 👇

``` js
import Header from "./components/Header";
```

What is the need for Named export?

❌ You **can't export** more than **two component** with default export. So we use `named export` ✅

Example:

``` js
export const Title = () => (
  //name exporting 👌
  <h1 id="logo" key="h2">
    Hello Food
    {/* Put Logo later! */}
  </h1>
);
```

#### Now how to import named export 🤔?

``` js
import { Title } from "./components/Header";
```

> If you see any component wrapper inside { } with `import` then it is a named export.

---

## Some of the naming conventions of the import file

_One way_

``` js
import Header, { Title } from "./components/Header";
```

In the above example, no extension was given like `.js`

`OR`

_Second Way_

``` js
import Header, { Title } from "./components/Header.js";
```

In the above example, the extension is given like `.js`

`OR`

_Third Way_

``` js
import Header, { Title } from "./components/Header.jsx";
```

In the above example, the extension is given like `.jsx`

> All these extensions like `.js`, `jsx`, or if you don't write the extension then also it conveys the same thing.

💡 It is also not necessary to keep the import name as same as the component name which we have exported.

Example:

``` js
import NewHeader, { Title } from "./components/Header.jsx";
```

This won't give us an error but it's a good practice to keep the component name the same as the exported component name. This will avoid confusion during searching for the file.

---

## Creating a config file

Always put hardcoded things into the `config.js` file. Alternative name as `constant.js`

Some constant values are needed to be used now and then which are written inside `config.js` or `constant.js`.

> NOTE: This will be named export component which will be imported like `import {component} from ./folfer/file.js` 👍

---

## Hooks 🔥

> 💡 React uses one-way data binding.

React variable is a state variable, every component in React maintains a state so you can put in all the variables in the state.

> 🔏 every time you have to create a local variable you have to use state.

#### What is Hook?

- It is just a normal function 👌
- One of the hooks is `useState()`. Many more hooks are given to us by React - FB dev OP 🫡

#### Where do you get useState from?

- From React library 👌
- It returns an Array 💥
- returns = [variable name, function to update the variable]
- It's a name-exported component so we import it like this:

``` js
import { useState } from "react"; //FB devs 🫡
```

#### How to create a local state variable in REACT?

- Local State Variable in REACT:

```jsx
const searchText = useState("KFC"); //this will have default value as KFC!
```

- Vs variable in JS:

```js
const searchText = "KFC"; // this is how you create in JS
```

#### Need of Hooks --- mainly useSate( )?

`#interview question`

- JS variables are not updated in React so to update our REACT variable we use useState( ) 🆗

- If any JS variable is updated then it may not show in the UI.
- React is watching the state variables

---
