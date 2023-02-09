# React

<details>

<summary>Chapter 1 Inception</summary>

## Theory

<details>

<summary>What is Emmet?</summary>

- This is a shortcut that generates a large amount of code on writing some text/key in text editors.
- For example, if you type `doc` in VS Code this will generate an entire HTML boiler Plot for you. This is similar to the snippet.

</details>

<details>

<summary>Difference between a Library and a Framework?</summary>

- The simple one difference
  | Framework | Library |
  | :--------------------------------------------------------: | :----------------: |
  | It provides ready-to-use tools for fast application dev | Libraries do not |

</details>

<details>

<summary>What is CDN? Why do we use it?</summary>

- `CDN` stands for **Content Delivery Network**. It is a system of distributed systems that deliver content based on the user's geographical location.
- Why do we use it?
  - This is used to reduce the latency of content delivery and it improves the performance of the website.

</details>

<details>

<summary>Why is React known as React?</summary>

- React is named React because of its ability to react to changes in data. React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces. The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.

- What is cross-origin in the script tag?
  - The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

</details>

<details>

<summary>What is the difference between React and ReactDOM?</summary>

- `React` is used to `create view` and `ReactDOM` is responsible for actually `rendering UI` in the browser.

</details>

<details>

<summary>What is difference between react.development.js and react.production.js files via CDN?</summary>

- The development build is used - as the name suggests - for development reasons.

- The production build, on the other hand, runs in production mode which means this is the code running on your client's machine.

</details>

<details>

<summary>What are async and defer?</summary>

- In practice, defer is used for scripts that need the whole DOM, and/or their relative execution order is important.

- And async is used for independent scripts, like counters or ads. And their relative execution order does not matter.

</details>

<details>

<summary>JS DOM Fundamentals</summary>

How to create an element?

- We create any element for example `h1` with the help of `document.createElement("h1")`.We create any element for example paragraph with the help of `document.createElement("p")`.

How to add text to created element?

- With the help of `variable_name.innerHTML("Hello")`

Where to store this created element?

- For this we must have the `id` of the `div`, this can be done with the help of `document.getElementById("id_name")`

How to push the element inside the id?

- This can be done with the help of `append child (variable_to_be_pushed)`, `appendChild` will push the created element to the div.

</details>

## Coding

- Build your first `Hello World` program using
  - Just HMTL
  - Using **JS** to manipulate the **DOM**
  - Using **React**
    - use CDN Links
    - Create an Element
    - Create nested React Elements
    - Use root.render

<details>

<summary>Build your first `Hello World` program using Just `HTML`</summary>

<br>

We can Simply add an h1 tag to create our first Hello World Program.

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

</details>

<details>

<summary>Build your first `Hello World` program using`JS` to manipulate the `DOM`</summary>

<br>

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

</details>

<details>

<summary>Build your first `Hello World` program using `React`</summary>

<br>

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

</details>

</details>

<details>

<summary>Chapter 2 Igniting our App</summary>

## Theory

<details>

<summary>What is  NPM ?</summary>

<br>

NPM is a tool used for package management.
NPM as most people call it is `Node package Manager` but that's not correct. NPM does not have any particular FULL form check this [link](https://www.npmjs.com/)

Though its use is to manage all the packages that get installed on the dev machine.

An alternative for this one is `yarn`.

How to initialze `NPM`?

```
npm init
```

This will ask you all the necessary details about the project.

If you want to skip this you can simply write

```
npm init -y
```

> `npm` takes care of it and creates the package.json JSON file automatically, but without configurations.

---

</details>

<details>

<summary>What is Parcel/Webpack? Why do we need it?</summary>

<br>

Parcel and Webpack both are the `Bundlers` which help very helpful in making our REACT application more powerful. Here we are using Parcel because **PARCEL IS BEAST** 🔥

We need bundlers because:

1. Minify our code
2. HMR (Hot Module Replacement) parcel keeps track via the file watcher algorithm
3. Cleaning our Code
4. Image Optimization
5. Caching
6. HTTPS server in dev
7. Compatible with older versions of the browser
8. Port Number
9. Zero Configuration

How to config the Parcel

```
npm install -D parcel
```

here -D stands for DevDependencie

**Parcel Commands** :

For development build:

```
npx parcel <entry_point>
```

For production build :

```
npx parcel build <entry_point>
```

---

</details>

<details>

<summary>What is .parcel-cache ?</summary>
<br>

When we build the project using parcel we always see this `.pracel-cache` in the directory. `.pracel-cache` is used by the parcel to reduce the build time of the project. So whenever the parcel builds anything again it does not have to build everything form scratch and re-initialize, everything and the build will always we close to the first build time or less than the build time.

---

</details>

<details>

<summary>What is npx ?</summary>

<br>

npx is a tool that is used to execute the packages, it simply means execute using npm.

</details>

## Coding

<details>

<summary>intialize npm into your repo</summary>

```shell
npm init
```

or

```shell
npm init -y
```

This skips the setup

</details>

<details>

<summary>install react and react-dom</summary>

```shell
npm i react
```

```shell
npm i react-dom
```

</details>

<details>

<summary>install parcel</summary>

Use this command to install the parcel

```
npm i parcel
```

OR

```
npm install parcel
```

</details>

<details>

<summary>add scripts for “start” and “build” with parcel commands</summary>

This is present inside the package.json

```
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },
```

Output:

<img src = "../2.Igniting_our_App/src/img/5.npm run start.png">
</details>

<details>

<summary>add browserlists</summary>

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

</details>

</details>

<details>

<summary>Chapter 3: Laying the Foundation Notes</summary>

## Theory

<details>

<summary>What is JSX?</summary>

<br>

JSX is behind the scene an `React.createElement()` which returns an `object` and then `HTML(DOM)`

The main require for JSX to run perfectly is `Babel` package!

</details>

<details>

<summary>How to create the variable in JSX?</summary>

```jsx
const heading = <h1 id="heading1">This is heading 1 in JSX</h1>;
```

</details>

<details>

<summary>How to render this JSX element?</summary>

<br>

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

</details>

<details>

<summary>How do we create the functional Component?</summary>

<br>

Firstly functional Component is similar to the ES6 function.

```jsx
const HeaderComponent = () => {
  return (
    <div>
      <h1 id="jsx1">This is an Heading 1 using JSX</h1>
    </div>
  );
};
```

Another way of writing the Functional Component!

```jsx
const HeaderComponent2 = function () {
  return (
    <div>
      <h2 id="jsx2">This is an Heading 2 using JSX</h2>
    </div>
  );
};
```

Another way of writing the Functional Component!

```jsx
const HeaderComponent3 = () => (
  <div>
    <h3 id="jsx3">This is an Heading 3 using JSX</h3>
  </div>
);
```

</details>

<details>

<summary> How to render this functional Component?</summary>

```jsx
root.render(<HeaderComponent />);
```

This will give output as

```
This is a Heading 1 using JSX
```

</details>

<details>

<summary>How to render one functional Component as the other functional Component?</summary>

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

Note:

> If you use component inside the component then it is known as Component Composition or Composing Component.

</details>

<details>

<summary>How to render the JSX variable inside the functional Component?</summary>

<br>

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

</details>

## Coding

- [Code](./3.Laying%20the%20Foundation/script.js)

</details>
