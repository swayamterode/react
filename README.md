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

- `CDN` stand for **Content Delivery Network**. It is a system of distributed systems that deliver content based on the user's geographical location.
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