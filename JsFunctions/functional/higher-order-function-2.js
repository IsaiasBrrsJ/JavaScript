//curring
function finalPrice(tax) {
    return function (price) {
        return price * (1 * tax) 
    };
}

const nycFinalPrice = finalPrice(0.10);
console.log(nycFinalPrice (1500));
console.log(nycFinalPrice (1200));
console.log(nycFinalPrice (1300));