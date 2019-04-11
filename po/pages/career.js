'use strict';

class CareerPage {
    constructor() {
        this.logo = element(by.css('img.header__logo'));
        this.slider = element(by.css('.slider'))
        this.searchForm = element(by.css('form.recruiting-search__form'));
    }

    async load() {
        await browser.get('https://epam.com/careers');
        return browser.wait(() => this.isLogoDisplayed());
    }

    async isLogoDisplayed(){
        return this.logo.isDisplayed();
    }
}

module.exports = CareerPage;