let btn = document.getAnimations




function validateFrom(){
//ocnsole.log('working')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')

if(username.value === '')
{
    setError(username, 'username is required');
}
else
{
    setSuccess(username);
}
}

function setError(element, message){
    const formGroup = element.parentElement;
    const small = formGroup.querySelector('small');
    const faExclamation = formGroup.querySelector('.fa-exclamation-circle');
    const faCheck = formGroup.querySelector('.fa-check-circle');
    small.innerText = message;
    small.style.display = 'block';
    faExclamation.style.display ='block';
    faCheck.style.display = 'none';
}
function setsuccess(element){
    const formGroup = element.parentElement;
    const small = formGroup.querySelector('small');
    const faExclamation = formGroup.querySelector('.fa-exclamation-circle');
    const faCheck = formGroup.querySelector('.fa-check-circle');
    small.style.display = 'none';
    faExclamation.style.display ='none';
    faCheck.style.display = 'block';


}