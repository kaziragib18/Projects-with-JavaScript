// Convert Seer to Mon

function seerToMon(seer) {
    if (seer <= 0) {
        output = 'Error! Input value can not be negative or zero';
    }
    else {
        let mon = seer / 40;
        output = mon;
    }
    return output;
}
let valueSeerToMon = 100;
let valueMon = seerToMon(valueSeerToMon);
console.log(valueMon);
