# React-Alphabet-List(in-Dev)

![Preview](https://raw.githubusercontent.com/xVanTuring/Alphabet-List/master/imgs/1.png)

## Demo
https://github.com/xVanTuring/Alphabet-List-Demo
---
## Usage
``` js
const data =["anything"]
```
``` js
        <AlphabetList
          data={data}
          generateFn={
            (item, index) => {
              return (
                <Tag
                  color="rgb(42, 42, 42)"
                  key={item + index}
                >
                  <Icon type="plus" style={{ margin: '0 4px 0 0' }} />
                  {item}
                </Tag>
              )
            }
          }
        />

```

This Project is Under The MIT License
