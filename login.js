const password=document.getElementById("password");
const toggle=document.getElementById("togglePassword");

toggle.addEventListener("click",()=>{

if(password.type==="password"){

password.type="text";

toggle.classList.remove("fa-eye");
toggle.classList.add("fa-eye-slash");

}else{

password.type="password";

toggle.classList.remove("fa-eye-slash");
toggle.classList.add("fa-eye");

}

});

document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

if(email==="admin@placepro.com" && password==="12345"){

alert("Login Successful!");

window.location="dashboard.html";

}else{

alert("Invalid Email or Password");

}

});