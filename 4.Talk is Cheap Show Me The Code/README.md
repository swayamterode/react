# Laying the Foundation Notes

## JSX (JavaScript XML)

### What is JSX?

JSX is behind the scene an `React.createElement()` which returns an `object` and then `HTML(DOM)`

The main require for JSX to run perfectly is `Babel` package!

### How to create the variable in JSX?

```jsx
const heading = <h1 id="heading1">This is heading 1 in JSX</h1>;
```

### How to render this JSX element?

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

### How do we create the functional Component?

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

### How to render this functional Component?

```jsx
root.render(<HeaderComponent />);
```

This will give output as

```
This is a Heading 1 using JSX
```

### How to render one functional Component as the other functional Component?

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
