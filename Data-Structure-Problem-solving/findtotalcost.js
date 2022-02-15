// Calculate the Total sale of the three item with given price, quantity and conditions

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if (perShirtQuantity < 0 || perPantQuantity < 0 || perShoeQuantity < 0) {
        output = "Invalid input. Please state your quntity.";
        return output;
    }
    else {
        let shirtPrice = 100;
        let pantPrice = 200;
        let shoePrice = 500;

        let shirtItemPrice = shirtQuantity * shirtPrice;
        let pantItemPrice = pantQuantity * pantPrice;
        let shoeItemPrice = shoeQuantity * shoePrice;

        let totalItemSale = shirtItemPrice + pantItemPrice + shoeItemPrice;

        return totalItemSale;
    }
}

let perShirtQuantity = 1;
let perPantQuantity = 1;
let perShoeQuantity = 1;

let myTotalSales = totalSales(perShirtQuantity, perPantQuantity, perShoeQuantity);
console.log(myTotalSales);