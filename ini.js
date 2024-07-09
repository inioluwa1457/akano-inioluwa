let Btn = document.querySelector('.buttonSave')
Btn.addEventListener("click", transactions)


function transactions (e){
//alert("0 ti click")
let type = document.getElementById('type').value
let name = document.getElementById('name').value
let amount = document.getElementById('amount').value
    amount = parseFloat(amount).toFixed(2)
     //console.log(type,name,amount)
    if(type!== "chooseOne" && name === ''  && amount == ''){
        alert("please fill all the empty spaces")
    }
    e.preventDefault();
}