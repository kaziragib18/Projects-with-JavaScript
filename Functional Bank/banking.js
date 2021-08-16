function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    //converting input string to number
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear deposit & withdraw input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    //converting deposit input string to number
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    //Update Total deposit
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd) {
    //Update Balance after deposit & withdraw
    const balanceTotal = document.getElementById('balance-total');
    //converting balance input string to number
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    //Update Total balance 
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount
    }
}

// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');

    updateTotalField('deposit-total', depositAmount);

    updateBalance(depositAmount, true);
});

//handle Withdraw button event
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get the amount withdrawn
    const withdawAmount = getInputValue('withdraw-input')

    updateTotalField('withdraw-total', withdawAmount);

    //Update Balance after Withdaw
    updateBalance(withdawAmount, false);

})