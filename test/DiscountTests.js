const assert = require('assert');
const app = require('../app');

describe('Regular customer discounts - ', function () {
    describe('discount when bill amount is 5000', function () {
        it('should return 5000 for bill amount 5000', function () {
            assert.equal(app("REGULAR",5000), 5000);
        });
    });
    describe('discount when bill amount is 10000', function () {
        it('should return 95000 for bill amount 10000', function () {
            assert.equal(app("REGULAR", 10000), 9500);
        });
    });
    describe('discount when bill amount is 15000', function () {
        it('should return 13500 for bill amount 15000', function () {
            assert.equal(app("REGULAR", 15000), 13500);
        });
    });
});

describe('Premium customer discounts - ', function () {
    describe('discount when bill amount is 4000', function () {
        it('should return 3600 for bill amount 4000', function () {
            assert.equal(app("PREMIUM", 4000), 3600);
        });
    });
    describe('discount when bill amount is 8000', function () {
        it('should return 7000 for bill amount 8000', function () {
            assert.equal(app("PREMIUM", 8000), 7000);
        });
    });
    describe('discount when bill amount is 12000', function () {
        it('should return 10200 for bill amount 12000', function () {
            assert.equal(app("PREMIUM", 12000), 10200);
        });
    });
    describe('discount when bill amount is 20000', function () {
        it('should return 15800 for bill amount 20000', function () {
            assert.equal(app("PREMIUM", 20000), 15800);
        });
    });  
});
