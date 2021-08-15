// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');

    //converting input string to number
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    const depositTotal = document.getElementById('deposit-total');

    //converting deposit input string to number
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    //Update Total deposit
    const newDepositeTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositeTotal;

    //Update Balance after deposit
    const balanceTotal = document.getElementById('balance-total');

    //converting balance input string to number
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    //Update Total balance 
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear deposit input field
    depositInput.value = '';

})

//handle Withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get the amount withdrawn
    const withdrawInput = document.getElementById('withdraw-input');
    //converting input string to number
    const withdawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdawAmountText);

    const withdrawTotal = document.getElementById('withdraw-total');

     //converting deposit input string to number
     const previousWithdrawText = withdrawTotal.innerText;
     const previousWithdrawTotal = parseFloat(previousWithdrawText);

     //Update Total withdraw
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //Update Balance after Withdaw
    const balanceTotal = document.getElementById('balance-total');

    //converting balance input string to number
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    //Update Total balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear deposit input field
    withdrawInput.value = '';

})