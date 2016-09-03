# djoin
join array into string with default delimiter `'/'`

# usage
`npm install djoin`

```js
  var djoin = require('djoin')
  console.log(djoin(['a', 'b', 'c'], '.') // => 'a.b.c'
  console.log(djoin(['a', 'b', 'c']) // => 'a/b/c'
  console.log(djoin(['','a','b','c','']) // => '/a/b/c/'
  console.log(djoin(['a', 'b']) // => 'a/b'
  console.log(djoin(['','','']) // => '///'
  console.log(djoin(['','']) // => '//'
  console.log(djoin(['']) // => '/'
  console.log(djoin([]) // => ''
  console.log(djoin('') // => ''
  console.log(djoin(undefined) // => ''
```
