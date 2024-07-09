let depositBtn = document.getElementById('deposit-btn')
depositBtn.addEventListener('click',function(){
    // alert("working")
    let depositInput = document.getElementById('deposit-input').value
    // alert(depositInput)
    if(depositInput == ''){
        alert("please Enter the Deposit Amount")
    }
    else{
        //alert(depositInput)
        const depositInput = document.getElementById("deposit");
        const currentDepositText = depositText.innerText;


        let wale = parseFloat(currentDepositText) + parseFloat(depositInput);
            wale = wale.toFixed(2)
            depositText.innerText = wale
            depositInput.value = "";

        const balanceText = document.getElementById("balance-text");
        const updatedBalance =(parseFloat(wale) + parsefloat(balanceText.innerText)).toFixed(2);
        balanceText.innerText = updatedBalance;
    }
})



let withdrawBtn = document.getElementById('withdraw-btn')
withdrawBtn.addEventListener("click", function(){
    let withdrawInput = document.getElementById('withdraw-input').value
    if(withdrawInput == ''){
        alert("please Enter the withdraw Amount")
    }
    else{
        //alert(withdrawInput)
        const withdrawText = document.getElementById("withdraw");
        const currentWithdrawText = withdrawText.innerText;
        const updatedWithdrawtext = (parseFloat(currentWithdrawText) + parseFloat(withdrawInput)).toFixed(2);
        withdrawText.innerText = updatedWithdrawText;
        withdrawInput.value = "";
        const balance = document.getElementById("balance-text");
        const currentBalance = balance.innerText;
        const updatedBalance = (parseFloat(currentBalance) - parseFloat(withdrawInput)).toFixed(2);
        balance.innerText = updatedBalance;
    }
})