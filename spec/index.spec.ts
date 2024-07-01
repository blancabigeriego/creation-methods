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

    it('should create a product package with internet, VoIP, and TV', () => {
        const productPackage = ProductPackage.createWithInternetVoIPAndTv("100MB", 91233788, ["LaLiga", "Estrenos"]);

        expect(productPackage.hasInternet()).toBe(true);
        expect(productPackage.hasVOIP()).toBe(true);
        expect(productPackage.hasTv()).toBe(true);
    });

    it('should create a product package only mobile and internet', () => {
        const productPackage = ProductPackage.createWithMobileAndInternet("100MB", 91233788);

        expect(productPackage.hasInternet()).toBe(true);    
        expect(productPackage.hasMobile()).toBe(true);
        expect(productPackage.hasVOIP()).toBe(false);
    });

    it('should create a product package mobile, VoIP and internet', () => {
        const productPackage = ProductPackage.createWithMobileInternetAndTv("100MB", 91233788, ["LaLiga", "Estrenos"]);

        expect(productPackage.hasInternet()).toBe(true);    
        expect(productPackage.hasMobile()).toBe(true);
        expect(productPackage.hasTv()).toBe(true);
        expect(productPackage.hasVOIP()).toBe(false);
    })
});