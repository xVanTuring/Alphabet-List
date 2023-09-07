# React-Alphabet-List(in-Dev)

[![NPM](https://nodei.co/npm/react-alphabet-list.png?mini=true)](https://npmjs.org/package/react-alphabet-list)

![Preview](https://raw.githubusercontent.com/xVanTuring/Alphabet-List/master/imgs/1.png)

## ¶Demo

[Alphabet-List-Demo](https://codesandbox.io/s/alphabet-list-demo-dpwit?fontsize=14) On CodeSandBox

## ¶Props

| Props                 | Type     | Description                                                                                                       |
| --------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| data (required)       | Array    | An array of strings or objects. _When it's an array of object, a key called 'name' must be present in the object_ |
| keyValue              | Boolean  | A boolean that states if data is an array of objects (_true_) or an array of strings (_false_)                    |
| style                 | Object   | A style object. Styles for the container                                                                          |
| alphabetListStyle     | Object   | A style object. Styles for the container of the alphabet list navigation on the right.                            |
| alphabetItemStyle     | Object   | A style object. Styles for each alphabet in the alphabet list navigation                                          |
| generateFn (required) | Function | A function that takes each item sent in the data array and returns the html to display                            |

## ¶Usage

```js
const data = ["anything"];
const keyValue = false;
```

if array of object is to be used

```js
const data = [{ name: "anything" }];
const keyValue = true;
```

```js
<AlphabetList
  data={data}
  keyValue={keyValue}
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
