var test = require('tape')

var djoin = require('./')

test('djoin', function (t) {
    t.plan(8)
    t.deepEqual(djoin(['a', 'b', 'c'], '.'), 'a.b.c', "djoin(['a', 'b', 'c'], '.') // => 'a.b.c'")
    t.deepEqual(djoin(['a', 'b', 'c']), 'a/b/c', "djoin(['a', 'b', 'c']) // => 'a/b/c'")
    t.deepEqual(djoin(['a', 'b']), 'a/b', "djoin(['a', 'b']) // => 'a/b'")
    t.deepEqual(djoin(['','']), '//', "djoin(['','']) // => '//'")
    t.deepEqual(djoin(['']), '/', "djoin(['']) // => '/'")
    t.deepEqual(djoin([]), '', "djoin([]) // => ''")
    t.deepEqual(djoin(''), '', "djoin('') // => ''")
    t.deepEqual(djoin(undefined), '', "djoin(undefined) // => ''")
})
