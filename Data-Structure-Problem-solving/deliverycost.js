// Calculate the delivery cost of the Tshirt with given quantity and conditions

function deliveryCost(tshirt) {
    const first100Cost = 100;
    const second200Cost = 80;
    const restCost = 50;
    // cost of delivery upto 100 Tshirt
    if (tshirt < 1) {
        return output = "Your quantity can not be Zero or Negative!"
    }
    else if (tshirt <= 100) {
        const output = tshirt * first100Cost;
        return output;
    }
    // cost of delivery upto 200 Tshirt
    else if (tshirt <= 200) {
        const first100Tshirt = 100 * first100Cost;
        const restTshirt = tshirt - 100;
        const second100Tshirt = restTshirt * second200Cost;
        const totalTshirtCost = first100Tshirt + second100Tshirt;
        return totalTshirtCost;
    }
    // cost of delivery after 200 Tshirt
    else {
        const first100Tshirt = 100 * first100Cost;
        const second100Tshirt = 100 * second200Cost;
        const restTshirt = tshirt - 200;
        const remainingTshirt = restTshirt * restCost;
        const totalTshirtCost = first100Tshirt + second100Tshirt + remainingTshirt;
        return totalTshirtCost;
    }
}
const tshirtCost = deliveryCost(1);
console.log(tshirtCost);