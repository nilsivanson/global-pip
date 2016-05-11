# global-pip example

```
'hello '
  .pip(x => x + x) // => 'hello hello '
  .pip(x => x.trim()) // => 'hello hello'
  .pip(x => x.split(' ') // => ['hello', 'hello']
  .pip(x => x.join(' my friend ') // => 'hello my friend hello'
```
