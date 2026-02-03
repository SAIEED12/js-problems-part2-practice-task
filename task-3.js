/*  laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required. */

/* const products = [
    {name: "Laptop", price: 35000},
    {name: "Tablet", price: 15000},
    {name: "Mobile", price: 20000}
];

function calculateElectronicsBudget(laptop, tablet, mobile){
    let total = 0;
    let laptopPrice = products[0].price;
    let tabletPrice = products[1].price;
    let mobilePrice = products[2].price;

    let laptopTotal = laptop * laptopPrice;
    let tabletTotal = tablet * tabletPrice;
    let mobileTotal = mobile * mobilePrice;
    total = laptopTotal + tabletTotal + mobileTotal;
    return total;
}
 */

function calculateElectronicsBudget(laptop, tablet, mobile) {
    const priceMap = {
        Laptop: 35000,
        Tablet: 15000,
        Mobile: 20000
    };

    return (laptop * priceMap.Laptop) +
           (tablet * priceMap.Tablet) +
           (mobile * priceMap.Mobile);
}

console.log(calculateElectronicsBudget(2,2,2));
