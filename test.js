var test = require('tape')

var djoin = require('./')

test('djoin', function (t) {
    t.plan(11)
    t.deepEqual(djoin(['a', 'b', 'c'], '.'), 'a.b.c', "djoin(['a', 'b', 'c'], '.') // => 'a.b.c'")
    t.deepEqual(djoin(['a', 'b', 'c']), 'a/b/c', "djoin(['a', 'b', 'c']) // => 'a/b/c'")
    t.deepEqual(djoin(['','a','b','','c','']), '/a/b//c/', "djoin(['','a','b','','c','']) // => '/a/b//c/'")
    t.deepEqual(djoin(['a', 'b','','']), 'a/b//', "djoin(['a', 'b','','']) // => 'a/b//'")
    t.deepEqual(djoin(['','','a', 'b']), '//a/b', "djoin(['','','a', 'b']) // => '//a/b'")
    t.deepEqual(djoin(['','','']), '//', "djoin(['','','']) // => '//'")
    t.deepEqual(djoin(['','']), '/', "djoin(['','']) // => '/'")
    t.deepEqual(djoin(['']), '', "djoin(['']) // => ''")
    t.deepEqual(djoin([]), undefined, "djoin([]) // => undefined")
    t.deepEqual(djoin(''), undefined, "djoin('') // => undefined")
    t.deepEqual(djoin(undefined), undefined, "djoin(undefined) // => undefined")
})
