function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    //converting input string to number
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear deposit input field
    inputField.value = '';
    return amountValue;
}

// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');

    //current total deposit
    const depositTotal = document.getElementById('deposit-total');

    //converting deposit input string to number
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    //Update Total deposit
    depositTotal.innerText = previousDepositTotal + depositAmount;

    //Update Balance after deposit
    const balanceTotal = document.getElementById('balance-total');

    //converting balance input string to number
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    //Update Total balance 
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
})

//handle Withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get the amount withdrawn
    // const withdrawInput = document.getElementById('withdraw-input');
    // //converting input string to number
    // const withdawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdawAmountText);
    const withdawAmount = getInputValue('withdraw-input')

    //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    //converting deposit input string to number
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    //Update Total withdraw
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    //Update Balance after Withdaw
    const balanceTotal = document.getElementById('balance-total');

    //converting balance input string to number
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    //Update Total balance
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

})