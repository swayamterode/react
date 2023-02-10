# Chapter 4: Talk is cheap to show me the code

## Theory

### Q1: Is JSX mandatory for REACT?

- No `JSX` is not mandatory for REACT! The same which can be done by JSX can also be done with plain JavaScript. We can use React.CreateElement() instead of `JSX` but we prefer to use JSX because it enhances readability and reduces code complexity.

---

### Q2: Is ES6 mandatory for REACT?

- If we don’t use ES6 in react, there is an alternative to perform. We use `create-react-class` instead of ES6. Let’s see some variations between ES6 and the create-react-class method.

---

### Q3: `{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}` in JSX

- `{TitleComponent}` - is a just normal variable which is similar to React.createElement. Anything enclosed inside { ... } is just a piece of JS.
- `{<TitleComponent/>}` - this return the functional component JSX value
- `{<TitleComponent></TitleComponent>}` - it is equivalent to `{<TitleComponent/>}` if there is no children

---

### Q4: How can I write comments in JSX?

- `{/* Comments are allowed here */}`

---

### Q5: What is `<React.Fragment></React.Fragment>` and `<></>`?

- `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. <></> is the shorthand tag for React.Fragment. The only difference between them is that the shorthand version **does not support the key attribute**.

example:

```text
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```

Note:

```
Both of these are having the same meaning
```

---

### Q6: What is Reconciliation in React?

- `Reconciliation` is a process through which the browser updates its DOM. This is done with the help of a `diffing algorithm`. Whenever the root elements have different types, React will tear down the old tree and build a new tree from scratch. When tearing down a tree, old DOM nodes are destroyed.
- React stores a copy of browser DOM is known as virtual DOM. The comparison is done by `diffing algorithm` between `Virtual DOM` and `Real DOM` it finds out the changed node and updates only the changed part and the rest nodes are kept as it is. This comparison is known as _Reconciliation_.

[read more here 🚀](https://reactjs.org/docs/reconciliation.html)

---

### Q7: What is React Fiber?

- React Fiber is a concept of ReactJS that is used to render a system faster, smoother, and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

  - Pause, resume, and restart rendering work on components as new updates come in
  - Reuse previously completed work and even abort it if not needed
  - Split work into chunks and prioritize tasks based on importance

### Q8: Why do we need keys in React?

- Keys help React identify which items have **changed, are added, or are removed**. Keys should be given to the elements inside the array to give the elements a stable identity

Example :

```js
<li key={0}> 0</li>
```

---

### Q9: Can we use the index as keys in React?

- Yes, we can use the index as keys, but it is not considered good practice to use them because the order of items may change. This can negatively impact performance and may cause issues with the component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in an unusual order.

---

### Q10: What are props in React? Ways to.

- props stand for properties. props are used in React to pass data from one component to another

Example:

``` js
function App() {
  return (
    <div className="App">
      <Tool name="swayam" tool="VS Code" /> // name and tool are props
    </div>
  );
}
```

---

### Q11: What is Config-Driven UI?

- Config Driven UI is based on the configurations the app receives. The offers in India are different during the Diwali sale but are not the same in the other parts of the world.
- This is known as `Config Driven UI`.

---

### Q12: Difference between Virtual DOM and Real DOM?

<div align = "center">

| Virtual Dom                                                                                                               | Real DOM                                                                                |
| :------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------- |
| DOM manipulation is very expensive                                                                                        | DOM manipulation is very easy                                                           |
| There is too much memory wastage                                                                                          | No memory wastage                                                                       |
| It updates Slow                                                                                                           | It updates fast                                                                         |
| It can directly update HTML                                                                                               | It can’t update HTML directly                                                           |
| Creates a new DOM if the element updates.                                                                                 | Update the JSX if the element is update                                                    |
| It allows us to directly target any specific node (HTML element) It can produce about 200,000 Virtual DOM Nodes / Second. | It represents the UI of your application It is only a virtual representation of the DOM |

</div>

---

Last updated : 9th Feb 23 ✅
