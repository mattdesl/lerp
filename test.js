var test = require('tape').test
var lerp = require('./')

test('lerp provides correct result', function(t) {
    t.equal( lerp(0, 1, 0), 0 )
    t.equal( lerp(-25, 50, 1), 50 )
    t.equal( lerp(-25, 50, 0), -25 )
    t.equal( lerp(100, 10, 0), 100 )
    t.equal( lerp(0, 100, 0.5), 50 )
    t.end()
})