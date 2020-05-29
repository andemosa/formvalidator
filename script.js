const username = document.getElementById("username");
const last_name = document.getElementById("last_name");
const first_name = document.getElementById("first_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");
const submit = document.getElementById("submit");

function checklength(e, minlength) {
    var el , elMsg ;
    el = e.target;
    elMsg = el.nextSibling
    console.log(el.value.length)
    if (el.value.length< minlength) {elMsg.textContent = 'Name must be ' + minlength + ' characters or more';
    el.style.border = '2px solid red';
    }else {
    elMsg.textContent = ' ';
    el.style.border = 'none'
    }}

username.addEventListener('blur', function(e){
    checklength(e, 5);
})

last_name.addEventListener('blur', function(e){
    checklength(e, 3);
})
first_name.addEventListener('blur', function(e){
    checklength(e, 3);
})

confirm_password.addEventListener('blur', ()=>{
    var elMsg, elMsg1 ;
    elMsg = confirm_password.nextSibling;
    elMsg1 = password.nextSibling;
    elMsg1.textContent = ' ';
    if(password.value !== confirm_password.value){
        password.style.border = '2px solid red';
        confirm_password.style.border = '2px solid red';
        elMsg.textContent = 'Passwords do not match';
    } else{
        password.style.border = 'none';
        confirm_password.style.border = 'none';
        elMsg.textContent = ' ';
    }
})

password.addEventListener('blur', () => {
    var elMsg ;
    elMsg = password.nextSibling;
    if(password.value.length < 6 || password.value.length > 13){
        elMsg.textContent = 'Password must be longer than six characters and less than thirteen characters';
        password.style.border = '2px solid red';
    } else{
        elMsg.textContent = ' ';
        password.style.border = 'none';
    }
})