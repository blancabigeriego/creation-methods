import { ProductPackage } from '../src/index';

describe('ProductPackage', () => {
    it('should create a product package with only internet', () => {
        const productPackage = ProductPackage.createWithInternet("100MB");

        expect(productPackage.hasInternet()).toBe(true);
        expect(productPackage.hasVOIP()).toBe(false);
        expect(productPackage.hasTv()).toBe(false);
    });

    it('should create a product package with internet and VoIP', () => {
        const productPackage = ProductPackage.createWithInternetAndVoIP("100MB", 446396635544);

        expect(productPackage.hasInternet()).toBe(true);
        expect(productPackage.hasVOIP()).toBe(true);
        expect(productPackage.hasTv()).toBe(false);
    });

    it('should create a product package with internet and TV', () => {
        const productPackage = ProductPackage.createWithInternetAndTv("100MB", ["LaLiga", "Estrenos"]);

        expect(productPackage.hasInternet()).toBe(true);
        expect(productPackage.hasVOIP()).toBe(false);
        expect(productPackage.hasTv()).toBe(true);
    });

    // xit('should create a product package with internet, VoIP, and TV', () => {
    //     const productPackage = new ProductPackage("100MB", 91233788, ["LaLiga", "Estrenos"]);

    //     expect(productPackage.hasInternet()).toBe(true);
    //     expect(productPackage.hasVOIP()).toBe(true);
    //     expect(productPackage.hasTv()).toBe(true);
    // });
});