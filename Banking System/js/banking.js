// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    //getv the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);
    
    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;
    //clear deposit input field
    depositInput.value = '';

})