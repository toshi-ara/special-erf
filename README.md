# erf / erfc

> [Error function][error-function] and
> [complementary error function][complementary-error-function].

Evaluates the error and complementary error functions.

This package is a rewrite of
 [math-erf](https://github.com/math-io/erf)
 and
 [math-erfc](https://github.com/math-io/erfc)
 in Typescript.
This package supports both CommonJs and ES Modules.

---

The [error function][error-function] is defined as

```math
\mathrm{erf}(x) = \frac{2}{\sqrt\pi}\int_0^x e^{-t^2}\,\mathrm dt
```

The [complementary error function][complementary-error-function] is defined as

```math
\mathrm{erfc}(x) = 1 - \mathrm{erf}(x) = \frac{2}{\sqrt\pi} \int_x^{\infty} e^{-t^2}\, dt
```


## Installation

``` bash
$ npm install @toshiara/special-erf
```


## Usage

``` javascript
// for CommonJs
const { erf, erfc } = require('@toshiara/special-erf');

// for ES Modules
import { erf, erfc } from '@toshiara/special-erf';
```

### erf(x)

Evaluates the [error function][error-function].

``` javascript
erf(2);
// returns 0.9953222650189527

erf(-1);
// returns -0.8427007929497149
```

If provided `NaN`, the `function` returns `NaN`.

``` javascript
erf(NaN);
// returns NaN
```

The [error function][error-function] is an [odd function][odd-function]; i.e., `erf(-x) = -erf(x)`. Thus, in accordance with the [IEEE 754][ieee754] standard, if provided `-0`, the `function` returns `-0`.

``` javascript
erf(-0);
// returns -0
```

#### erfc( x )

Evaluates the [complementary error function][complementary-error-function].

``` javascript
erfc(2);
// returns 0.004677734981047266

erfc(-1);
// returns 1.8427007929497148

erfc(Number.POSITIVE_INFINITY);
// returns 0

erfc(Number.NEGATIVE_INFINITY);
// returns 2
```

If provided `NaN`, the `function` returns `NaN`.

``` javascript
erfc(NaN);
// returns NaN
```


## License
[MIT license](http://opensource.org/licenses/MIT).


## Copyright
Copyright &copy; 2016. The [Compute.io](https://github.com/compute-io) Authors.


[error-function]: https://en.wikipedia.org/wiki/Error_function
[complementary-error-function]: https://en.wikipedia.org/wiki/Error_function#Complementary_error_function
[odd-function]: https://en.wikipedia.org/wiki/Even_and_odd_functions
[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

