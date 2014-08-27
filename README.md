[![browser support](https://ci.testling.com/mattdesl/lerp.png)](https://ci.testling.com/mattdesl/lerp)

# lerp

[![frozen](http://badges.github.io/stability-badges/dist/frozen.svg)](http://github.com/badges/stability-badges)

In the fashion of small modules and saving keystrokes; this is a bare-bones [linear interpolation](http://en.wikipedia.org/wiki/Linear_interpolation) function. Same as `mix` in GLSL.

```js
var lerp = require('lerp')

var res = lerp(a, b, t);
```

## Usage

[![NPM](https://nodei.co/npm/lerp.png)](https://nodei.co/npm/lerp/)

```lerp(start, end, alpha)```

Interpolates from start to end using the given alpha.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/lerp/blob/master/LICENSE.md) for details.
