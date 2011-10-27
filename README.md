# Dance.mv

Dance (move) is diet Haskell in Javascript. It's kind of a step-sister to [Underscore](http://underscore.com).
While Underscore has its strict ways, Dance move, released under the BeerWare
license, does functional things a bit more out of hand and awesome.
Imagine dragging a monkey to a bohemic rails party, yeah.

Basically you can do gnarly functional programming in [Move](http://movelang.org) or Javascript.

Dance is **STRONGLY** influenced by [Haskell](http://haskell.org/) and its
standard library.

## Usage

Either use the precompiled dance.js JavaScript library together with the Move runtime or use the Move source files in the "src" directory directly.

Dance depends on [Move](http://movelang.org) (>= 0.4.4) for running and [Vows](http://vowsjs.org/) for testing.

Compiling is easy:

```
move compile -d src -o dance.js
```

Testing is even easier:

```
move test/array_spec.mv
move test/number_spec.mv
move test/object_spec.mv
```

To use Dance with Javascript in the browser, just include the Move runtime:

``` html
<script type="text/javascript" src="http://movelang.org/move-0.4.4-rt.js"></script>
<script type="text/javascript" src="dance.js"></script>
<script type"text/javascript">

  var dance = Move.require('dance');

  // Dance magic [1,2,3].tail etc

</script>
```

To use Dance with Move in the browser, just include Move:

``` html
<script type="text/javascript" src="http://movelang.org/move-0.4.4.js"></script>
<script type="text/javascript" src="dance.js"></script>
<!-- or <script type="text/move" src="dance.mv"></script> -->
<script type"text/move">

  import dance

  // Dance magic [1,2,3].tail etc

</script>
```

Move and Vows may be installed with npm.

## Examples

This is an example in Move, but remember, Dance may be used with **Javascript** as well.

```javascript
insertion_sort = ^(xs){
  if (xs.empty) return []
  return (insertion_sort xs.tail).insert xs.head
}
```

For further Move and Javascript examples checkout the /examples dir.

## Functions

Included functions are:
tail, head, last, init, empty, _reverse, rev, add, append, fadd, map, foldl, foldr, and, or, sum, product, _concat, conc, any, all, concatMap, maximum, minimum, insert, delete, del, replicate, take, drop, takeWhile, dropWhile, group, elem, NotElem, find, filter, zip, even, odd, minimumBy, maximumBy, insertBy, deleteBy, sortBy, groupBy

To find out what each of these do, please read the source, the tests or the [Haskell List](http://hackage.haskell.org/packages/archive/base/latest/doc/html/Data-List.html) documentation.

Those functions which do not require any parameters are used as vars, ie array.tail,
not array.tail() - just like Ruby (<3).

## Performance

Please note that this library favors recursion. I do not fully know what implication it
will have on your software. Result varies.

Also note that this library adds to the standard Array, Number and Object libraries.
Dance was designed to be neutral and easy.

## License

(The MIT License)

Copyright (c) 2011 Emanuel Andersson

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.