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

function getCurrentBalance() {
    //Update Balance after deposit & withdraw
    const balanceTotal = document.getElementById('balance-total');
    //converting balance input string to number
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    //Update Total balance 
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');

    // Error handling for negative value
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

//handle Withdraw button event
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get the amount withdrawn
    const withdawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    // Error handling for negative value
    if (withdawAmount > 0 && withdawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdawAmount);
        //Update Balance after Withdaw
        updateBalance(withdawAmount, false);
    }
    if (withdawAmount > currentBalance) {
        console.log('Insufficient Balace!');
    }
});