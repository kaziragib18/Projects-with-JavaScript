// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');

    //converting input string to number
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
  
    const depositTotal = document.getElementById('deposit-total');

    //converting input string to number
     const previousDepositText = depositTotal.innerText;
     const previousDepositAmount = parseFloat(previousDepositText);
    //Update Total deposit
     const newDepositeTotal = previousDepositAmount + newDepositAmount;
 
    depositTotal.innerText = newDepositeTotal;

    //Update Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;



    //clear deposit input field
    depositInput.value = '';

})