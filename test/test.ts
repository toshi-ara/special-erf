import { erf, erfc } from "../dist/esm/index.js";


describe("erf / erfc functions", () => {
    let digits = 18;

    it("Check erf function", () => {
        // results by erf function in Julia SpecialFunction package
        expect(erf(0.8)).toBeCloseTo(0.7421009647076605, digits);
        expect(erf(-0.6)).toBeCloseTo(-0.6038560908479259, digits);
        expect(erf(1)).toBeCloseTo(0.8427007929497149, digits);
        expect(erf(-1.2)).toBeCloseTo(-0.9103139782296353, digits);
        expect(erf(2)).toBeCloseTo(0.9953222650189527, digits);
        expect(erf(-2.5)).toBeCloseTo(-0.999593047982555, digits);
        expect(erf(3)).toBeCloseTo(0.9999779095030014, digits);
        expect(erf(-25)).toBeCloseTo(-1.0, digits);
        expect(erf(30)).toBeCloseTo(1.0, digits);
        expect(erf(Infinity)).toBeCloseTo(1.0, digits);
        expect(erf(-Infinity)).toBeCloseTo(-1.0, digits);
    });

    it("Check erfc function (unregularized)", () => {
        // results by erfc function in Julia SpecialFunction package
        expect(erfc(0.8)).toBeCloseTo(0.2578990352923395, digits);
        expect(erfc(-0.6)).toBeCloseTo(1.603856090847926, digits);
        expect(erfc(1)).toBeCloseTo(0.15729920705028513, digits);
        expect(erfc(-1.2)).toBeCloseTo(1.9103139782296354, digits);
        expect(erfc(2)).toBeCloseTo(0.004677734981047266, digits);
        expect(erfc(-2.5)).toBeCloseTo(1.999593047982555, digits);
        expect(erfc(3)).toBeCloseTo(2.2090496998585438e-5, digits);
        expect(erfc(-25)).toBeCloseTo(2.0, digits);
        expect(erfc(30)).toBeCloseTo(0.0, digits);
        expect(erfc(Infinity)).toBeCloseTo(0.0, digits);
        expect(erfc(-Infinity)).toBeCloseTo(2.0, digits);
    });
});

