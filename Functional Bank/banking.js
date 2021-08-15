// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');

    //converting input string to number
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    //get current deposit
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
    balanceTotal.innerText  = previousBalanceTotal + depositAmount;

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
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear deposit input field
    withdrawInput.value = '';

})