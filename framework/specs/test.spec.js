'use strict'
const CareerPage = require('../../po/pages/career');
const career = new CareerPage();


describe('Open Career Page', () => {
    beforeEach(async () => {
        await career.load();
    });

    describe('Page', () => {
        it('should be opened', async() => {
            await expect(career.isLogoDisplayed()).to.eventually.be.true;
        });
    });
    
});