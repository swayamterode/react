# React

<details>

<summary>Chapter 1: Inception</summary>

## Theory

### What is Emmet?

- This is a shortcut that generates a large amount of code on writing some text/key in text editors.
- For example, if you type `doc` in VS Code this will generate an entire HTML boiler Plot for you. This is similar to the snippet.

---

### Difference between a Library and a Framework?

- The simple one difference
  | Framework | Library |
  | :--------------------------------------------------------: | :----------------: |
  | It provides ready-to-use tools for fast application dev | Libraries do not |

---

### What is CDN? Why do we use it?

- `CDN` stands for **Content Delivery Network**. It is a system of distributed systems that deliver content based on the user's geographical location.
- Why do we use it?
  - This is used to reduce the latency of content delivery and it improves the performance of the website.

---

### Why is React known as React?

- React is named React because of its ability to react to changes in data. React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces. The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.

---

### What is cross-origin in the script tag?

- The cross-origin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

---

### What is the difference between React and ReactDOM?

- `React` is used to `create view` and `ReactDOM` is responsible for actually `rendering UI` in the browser.

---

### What is difference between react.development.js and react.production.js files via CDN?

- The development build is used - as the name suggests - for development reasons.

- The production build, on the other hand, runs in production mode which means this is the code running on your client's machine.

---

### What are async and defer?

- In practice, defer is used for scripts that need the whole DOM, and/or their relative execution order is important.

- And async is used for independent scripts, like counters or ads. And their relative execution order does not matter.

---

<details>

<summary>JS DOM Fundamentals</summary>

### How to create an element?

- We create any element for example `h1` with the help of `document.createElement("h1")`.We create any element for example paragraph with the help of `document.createElement("p")`.

---

### How to add text to created element?

- With the help of `variable_name.innerHTML("Hello")`

---

### Where to store this created element?

- For this we must have the `id` of the `div`, this can be done with the help of `document.getElementById("id_name")`

---

### How to push the element inside the id?

- This can be done with the help of `append child (variable_to_be_pushed)`, `appendChild` will push the created element to the div.

---

</details>

## Coding

### Build your first `Hello World` program using Just `HTML`

- We can Simply add an `h1` tag to create our first Hello World Program.

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Simply use h1 tag -->
    <h1>Hello World</h1>
  </body>
</html>
```

[Code 🔗](../1.Inception/HelloWorld.html)

---

### Build your first `Hello World` program using`JS` to manipulate the `DOM`

```HTML
<body>
  <!-- JS is written inside script tag 👍 -->
  <script>
    const heading = document.createElement(""); //creating h1 tag!
    heading.innerHTML = "Hello World"; // adding content to the h1 tag!
    //now we need to push this heading into the div
    const value = document.getElementById("root");
    value.appendChild(heading); //pushing heading into the div with the help of appendChild
  </script>
</body>
```

[Code 🔗](../1.Inception/2.HelloWorldUsingJs.html)

---

### Build your first `Hello World` program using `React`.

```html
<body>
  <div id="root">Not Rendered</div>

  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>

  <script>
    const heading = React.createElement("h1", {}, "Hello Wolrd"); //this will override everything inside the root!, means anything written will get overwritten
    //React element is an Object 💯
    const root = ReactDOM.createRoot(document.getElementById("root")); //whatever you passing becomes the root
    //passing react element inside the root
    root.render(heading); //just like appednChild()in JS!
  </script>
</body>
```

---

</details>

<!-- End of Chapter 1 -->

<details>

<summary>Chapter 2: Igniting our App</summary>

## Theory

### What is NPM?

- NPM is a tool used for package management.
  NPM as most people call it is `Node package Manager` but that's not correct. NPM does not have any particular FULL form check this [link](https://www.npmjs.com/)

- Though its use is to manage all the packages that get installed on the dev machine.

- An alternative for this one is `yarn`.

---

### How to initialze `NPM`?

```
npm init
```

This will ask you all the necessary details about the project.

If you want to skip this you can simply run:

```
npm init -y
```

> `npm` takes care of it and creates the package.json JSON file automatically, but without configurations.

---

### What is Parcel/Webpack? Why do we need it?

- Parcel and Webpack both are the `Bundlers` which help very helpful in making our REACT application more powerful.

We need bundlers because:

1. Minify our code
2. It uses HMR (Hot Module Replacement) parcel to keep track via the file watcher algorithm
3. Cleaning our Code
4. Image Optimization
5. Caching
6. HTTPS server in dev
7. Compatible with older versions of the browser
8. Port Number
9. Zero Configuration

---

### How to config the Parcel

```
npm install -D parcel
```

> here -D stands for DevDependencie

**Parcel Commands** :

- For development build:

```
npx parcel <entry_point>
```

- For production build :

```
npx parcel build <entry_point>
```

---

### What is .parcel-cache ?

- When we build the project using parcel we always see this `.pracel-cache` in the directory. `.pracel-cache` is used by the parcel to **reduce** the **build time** of the project.
- So whenever the parcel builds anything again it does not have to build everything from scratch and re-initialize, everything, and the build will always be close to the first build time or less than the build time.

---

### What is npx?

- npx is a tool that is used to execute the packages, it simply means execute using npm.

## Coding

### Initialize npm into your repo

```shell
npm init
```

`OR`

- This skips the entire configuration which is asked by the npm during its initialization.

```shell
npm init -y
```

---

### install react and react-dom

- Installing react library

```shell
npm i react
```

- Installing react dom library

```shell
npm i react-dom
```

---

### Install parcel

- Use this command to install the parcel

```
npm i parcel
```

OR

```
npm install parcel
```

> Both convey the same meaning

---

### Add scripts for “start” and “build” with parcel commands

- This is present inside the package.json

```
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },
```

Output:

<img src = "./2.Igniting our App/src/img/5.npm run start.png">

---

### Add browserlists

[Read More here!](https://browsersl.ist/#q=%3E+0.2%25%2C+not+dead%2C+not+op_mini+all)

```JSON
{
  "name": "2.igniting_our_app",
  "version": "1.0.0",
  "description": "Chapter 2 Igniting our App!",
  "main": "srcipt.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/swayamterode/react.git"
  },
  "author": "Swayam Terode",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/swayamterode/react/issues"
  },
  "homepage": "https://github.com/swayamterode/react#readme",
  "devDependencies": {
    "parcel": "^2.8.2",
    "process": "^0.11.10"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  //   this is how we can use the browserlist
  "browserlist": ["last 10 versions"]
}
```

---

</details>

<details>

<summary>Chapter 3: Laying the Foundation</summary>

## Theory

### What is JSX?

- JSX is behind the scene an `React.createElement()` which returns an `object` and then `HTML(DOM)`

- The main requirement for JSX to run perfectly is the `Babel` package!

- The Babel package already came with the Parcel so we don't install it again

---

### How to create the variable in JSX?

```jsx
const heading = <h1 id="heading1">This is heading 1 in JSX</h1>;
```

---

### How to render this JSX element?

```js
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

---

### How do we create the functional Component?

- Firstly functional Component is similar to the ES6 function.

```jsx
const HeaderComponent = () => {
  return (
    <div>
      <h1 id="jsx1">This is an Heading 1 using JSX</h1>
    </div>
  );
};
```

- Another way of writing the Functional Component!

```jsx
const HeaderComponent2 = function () {
  return (
    <div>
      <h2 id="jsx2">This is an Heading 2 using JSX</h2>
    </div>
  );
};
```

Another way of writing the Functional Component (Cool developer way 😎)!

```jsx
const HeaderComponent3 = () => (
  <div>
    <h3 id="jsx3">This is an Heading 3 using JSX</h3>
  </div>
);
```

---

### How to render this functional Component?

```jsx
root.render(<HeaderComponent />);
```

This will give the output as:

```
This is a Heading 1 using JSX
```

---

### How to render one functional Component as the other functional Component?

<br>

```jsx
const RenderHeaderComponent = () => {
  return (
    <div>
      {/*Can also run JS code inside this*/}
      {<HeaderComponent />} {/*Component Composition*/}
      {/** Both are same*/}
      {HeaderComponent2()}
      <h4 id="jsx4">This is JSX4 functional Component</h4>
    </div>
  );
};
```

> 💡 If you use a component inside the component then it is known as Component Composition or Composing Component.

---

### How to render the JSX variable inside the functional Component?

```jsx
const RenderHeaderComponent = () => {
  return (
    <div>
      {<HeaderComponent />}
      {/** Both are same*/}
      {HeaderComponent2()}
      {/* Variable*/}
      {heading}
      <h4 id="jsx4">This is JSX4 functional Component</h4>
    </div>
  );
};
```

## Coding

- [Code](./3.Laying%20the%20Foundation/script.js)

---

</details>

<details>

<summary>Chapter 4: Talk is cheap show me the code</summary>

## Theory

### Is JSX mandatory for REACT?

- No `JSX` is not mandatory for REACT! The same which can be done by JSX can also be done with plain JavaScript. We can use React.CreateElement() instead of `JSX` but we prefer to use JSX because it enhances readability and reduces code complexity.

---

### Is ES6 mandatory for REACT?

- If we don’t use ES6 in react, there is an alternative to perform. We use `create-react-class` instead of ES6. Let’s see some variations between ES6 and the create-react-class method.

---

### `{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}` in JSX

- `{TitleComponent}` - is a just normal variable which is similar to React.createElement. Anything enclosed inside { ... } is just a piece of JS.
- `{<TitleComponent/>}` - this return the functional component JSX value
- `{<TitleComponent></TitleComponent>}` - it is equivalent to `{<TitleComponent/>}` if there is no children

---

### How can I write comments in JSX?

- `{/* Comments are allowed here */}`

---

### What is `React.Fragment` and `<>` `</>` ?

- `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. <></> is the shorthand tag for React.Fragment. The only difference between them is that the shorthand version **does not support the key attribute**.

**Example**:

```jsx
return (
  <React.Fragment>
    <Header />
    <Navigation />
    <Main />
    <Footer />
  </React.Fragment>
);
```

`OR`

```
return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```

```
Both of these have the same meaning.
```

---

### What is Reconciliation in React?

- `Reconciliation` is a process through which the browser updates its DOM. This is done with the help of a `diffing algorithm`. Whenever the root elements have different types, React will tear down the old tree and build a new tree from scratch. When tearing down a tree, old DOM nodes are destroyed.
- React stores a copy of browser DOM is known as virtual DOM. The comparison is done by `diffing algorithm` between `Virtual DOM` and `Real DOM` it finds out the changed node and updates only the changed part and the rest nodes are kept as it is. This comparison is known as _Reconciliation_.

[read more here 🚀](https://reactjs.org/docs/reconciliation.html)

---

### What is React Fiber?

- React Fiber is a concept of ReactJS that is used to render a system faster, smoother, and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

  - Pause, resume, and restart rendering work on components as new updates come in
  - Reuse previously completed work and even abort it if not needed
  - Split work into chunks and prioritize tasks based on importance

---

### Why do we need keys in React?

- Keys help React identify which items have **changed, are added, or are removed**. Keys should be given to the elements inside the array to give the elements a stable identity

Example :

```js
<li key={0}> 0</li>
```

---

### Can we use the index as keys in React?

- Yes, we can use the index as keys, but it is not considered good practice to use them because the order of items may change. This can negatively impact performance and may cause issues with the component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in an unusual order.

---

### What are props in React?

- props stand for properties. props are used in React to pass data from one component to another

Example:

```jsx
function App() {
  return (
    <div className="App">
      <Tool name="swayam" tool="VS Code" /> // name and tool are props
    </div>
  );
}
```

---

### What is Config-Driven UI?

- Config Driven UI is based on the configurations the app receives. The offers in India are different during the Diwali sale but are not the same in the other parts of the world.
- This is known as `Config Driven UI`.

---

### Difference between Virtual DOM and Real DOM?

<div align = "center">

| Virtual Dom                                                                                                               | Real DOM                                                                                |
| :------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------- |
| DOM manipulation is very expensive                                                                                        | DOM manipulation is very easy                                                           |
| There is too much memory wastage                                                                                          | No memory wastage                                                                       |
| It updates Slow                                                                                                           | It updates fast                                                                         |
| It can directly update HTML                                                                                               | It can’t update HTML directly                                                           |
| Creates a new DOM if the element updates.                                                                                 | Update the JSX if the element is updated                                                |
| It allows us to directly target any specific node (HTML element) It can produce about 200,000 Virtual DOM Nodes / Second. | It represents the UI of your application It is only a virtual representation of the DOM |

</div>

## Coding

- [Code](./4.Talk%20is%20Cheap%20Show%20Me%20The%20Code/script.js) (Heavily Commented)

---

</details>

<details>

<summary>Chapter 5: Let's get Hooked!</summary>

## Theory

### What is the difference between Named export, Default export, and \* as export?

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

---

### What is the importance of the config.js file?

- All the Hardcoded data is written in `config.js`. When we use the same code in multiple parts of the App we can write that piece of code in the `config.js`.

- Here we also prefer to export it as `named export` so that only the particular component can be used whenever needed.

---

### What are React Hooks?

- React Hooks in simpler words is just a normal function. It allows us to use `useState( )` and other Hooks as well.

---

### Why do we need a useState Hook?

- The main reason to use `useState()` is that JS can't update the variable in React so we use `useState()` with `useState()` which changes the variable/component. This functionality is not provided by JS in React.

---

## Coding

- [Create config File](./5.Let's%20Get%20Hooked/src/config.js)
- [Create a Search Box in your App](./5.Let's%20Get%20Hooked/src/components/Body.js)

---

</details>

<details>

<summary>Chapter 6: Exploring the World</summary>

## Theory

### What is Monolith architecture?

- All components of the application, including the `user interface`, `business logic`, etc are built and deployed as a single application.
- It is usually easy to deploy and develop as all the components are packed together and deployed as a single Unit.
- It may also lead to several issues such as scalability issues, and difficulty in maintaining the codebase as all the files are in the same folder/repo.

---

### What is the difference between Monolith and Microservices?

- In Monolith all components of the application are built and deployed as a single application.

- In microservices, the single application is divided into various small chunks such as `UI`, `Payment Processing`, `auth`, etc. It is easier to maintain the codebase, it's more scalable.

---

### Why do we need useEffect?

- It allows us to manage the component side effects such as `fetching the API`, `subscribing to events`, or manipulating the `DOM`.
- Updating the component state

useEffect( ) accepts two arguments: `callback function` and `dependency array`.

```js
useEffect(() => {
  // .
  // .
  // .
  // .
  // .
}, []);
```

The `() => {}` is a callback function and `[]` is called an empty dependency array. If anything that we pass (suppose currentState) inside the `[]` it triggers the callback function and changes the state of the application.

```jsx
useEffect(() => {
  setCurrentState("true");
}, [currentState]);
```

If we do not pass an empty dependency array then the useEffect runs whenever the UI is rendered.

```jsx
useEffect(() => {});
```

---

### What is optional chaining?

- Optional Chaining is the JavaScript feature that allows us to access the properties or the methods of the object.

- It is represented by the question mark symbol `?` and can be used with the combination of the `.` or bracket notation `[]`.

See the example 👇

![OptionalChaining](./6.Exploring%20the%20World/Assignment/img/optionalChaining.png)

---

### What is Shimmer UI?

- It is just a skeleton of the component which will load when there are any UI changes or any state changes.

- Shimmer UI is designed to improve the user experience by reducing load time.

- Overall, Shimmer UI is a useful technique for improving the user experience of web applications by providing visual feedback during content loading. It helps to reduce user frustration and prevent users from leaving the application due to long load times or lack of feedback.

---

### What is the difference between JS expression and JS statement

In general, expressions are used to compute values or return values from functions, while statements are used to control the flow of a program and perform actions.

---

### What is Conditional Rendering?

- `Conditional rendering` in React works the same way conditions work in `JavaScript`. Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them. for example:

```js
// Using the Ternary operator as a shorthand way of writing an if-else statement
{isLoggedIn? (return <UserGreeting />) : (return <GuestGreeting />)};
// Using an if…else Statement
{
  (if (isLoggedIn) {
    return <UserGreeting />;
  }else {
    return <GuestGreeting />;
  })
}
// Using Logical &&
{isLoggedIn && <button>Logout</button>}
```

---

### What is CORS?

- Cross-Origin Resource Sharing (CORS) is an HTTP-header-based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.

---

### What is async await?

- `Async`: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
- `Await`: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

  for example:

```jsx
// async function getRestaurant to fetch Swiggy API data
async function getRestaurants() {
  const data = await fetch("Swiggy_API_URL");
  const json = await data.json();
  // we get the Swiggy API data in json format
  console.log(json);
}
```

---

### What is the use of const json = await data.json(); in getRestaurants()?

- The data object, returned by the `await fetch()`, is a generic placeholder for multiple data formats. so we can extract the JSON object from a fetch response by using await `data.json(). data.json()` is a method on the data object that lets you extract a JSON object from the data or response. The method returns a promise because we have used await keyword. so `data.json()` returns a promise resolved to a `JSON` object.

## Coding

- [Build Shimmer UI](./6.Exploring%20the%20World/src/components/Shimmer.js)

</details>

---

### Facing issues on local?

<details>

<br>

1. Install `npm`

```
npm init
```

1. Install `Parcel`

```
npm i -D parcel
```

1. Open Terminal in VSCode and write:

```
npm start
```

</details>

Last updated: 28th Feb 23
