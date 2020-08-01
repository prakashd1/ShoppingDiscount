const customerTypes = require('./types/CustomerType.json')


module.exports = function DiscountCalculator(type, amount) {
    let discountSlabs = customerTypes[type]

    return discountSlabs.reduce((prev, curr, idx, arr) => {
        if (amount > 0) {
            let slab = curr.endAmount - curr.startAmount
            let diff = amount - slab

            if (diff > 0) {
                amount = diff;
                prev = prev + (slab * ((100 - curr.discountPercentage) / 100))
            } else {
                prev = prev + (amount * ((100 - curr.discountPercentage) / 100))
                amount = 0
            }
        }
        return prev


    }, 0);



}

