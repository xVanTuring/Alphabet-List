# React-Alphabet-List(in-Dev)

[![NPM](https://nodei.co/npm/react-alphabet-list.png?mini=true)](https://npmjs.org/package/react-alphabet-list)

![Preview](https://raw.githubusercontent.com/xVanTuring/Alphabet-List/master/imgs/1.png)

## ¶Demo

[Alphabet-List-Demo](https://codesandbox.io/s/alphabet-list-demo-dpwit?fontsize=14) On CodeSandBox

## ¶Props

| Props                 | Type     | Description                                                                                               |
| --------------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| data (required)       | Array    | An array of strings or objects. _When it's an array of object, specify the name key of item in `nameKey`_ |
| nameKey               | String   | A string that tells the name key of one item, `undefined` if data is string array                         |
| style                 | Object   | A style object. Styles for the container                                                                  |
| alphabetListStyle     | Object   | A style object. Styles for the container of the alphabet list navigation on the right.                    |
| alphabetItemStyle     | Object   | A style object. Styles for each alphabet in the alphabet list navigation                                  |
| generateFn (required) | Function | A function that takes each item sent in the data array and returns the html to display                    |

## ¶Usage

```js
const data = ["anything"];
```

if array of object is to be used

```js
const data = [{ name: "anything" }];
const nameKey = "name";
```

```jsx
<AlphabetList
  data={data}
  nameKey={nameKey}
  style={{}}
  alphabetListStyle={{}}
  alphabetItemStyle={{}}
  generateFn={(item, index) => {
    return <div key={item}>{item}</div>;
  }}
/>
```

---

This Project is Under The MIT License
