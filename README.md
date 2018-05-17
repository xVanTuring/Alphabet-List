# React-Alphabet-List(in-Dev)
[![NPM](https://nodei.co/npm/react-alphabet-list.png?mini=true)](https://npmjs.org/package/react-alphabet-list)

![Preview](https://raw.githubusercontent.com/xVanTuring/Alphabet-List/master/imgs/1.png)

## ¶Demo
https://github.com/xVanTuring/Alphabet-List-Demo
## ¶Usage
``` js
const data =["anything"]
```
``` js
<AlphabetList
  data={data}
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
