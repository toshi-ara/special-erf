/**
 * NOTE: the following copyright and license, as well as the long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_erf.c?revision=268523&view=co}.
 *
 * The implementation follows the original, but has been modified for JavaScript.
 */
/**
 * FUNCTION: erf(x)
 *	Evaluates the error function.
 *
 * @param {Number} x - input value
 * @returns {Number} evaluated error function
 */
export declare function erf(x: number): number;
/**
 * FUNCTION: erfc(x)
 *	Evaluates the complementary error function.
 *
 * @param {Number} x - input value
 * @returns {Number} evaluated complementary error function
 */
export declare function erfc(x: number): number;
