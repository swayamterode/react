# Coding Igniting our App

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
  //   this is how we can use the browser list
  "browserlist": ["last 10 versions"]
}
```

</details>
