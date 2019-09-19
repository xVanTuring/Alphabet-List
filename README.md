# React-Alphabet-List(in-Dev)
[![NPM](https://nodei.co/npm/react-alphabet-list.png?mini=true)](https://npmjs.org/package/react-alphabet-list)

![Preview](https://raw.githubusercontent.com/xVanTuring/Alphabet-List/master/imgs/1.png)

## ¶Demo
[Alphabet-List-Demo](https://codesandbox.io/s/alphabet-list-demo-dpwit?fontsize=14) On CodeSandBox
## ¶Usage
``` js
const data =["anything"]
```
``` js
<AlphabetList
  data={data}
  style={{}}
  generateFn={
    (item, index) => {
      return (
        <div key={item}>
          {item}
        </div>
      )
    }
  }
/>

```

---
This Project is Under The MIT License
