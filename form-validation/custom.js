const form = document.getElementById("form");
console.log(form);
const username = document.getElementById("username");
console.log(username);
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

const checkInputs = () => {
    //get values from input
    const usernameValue = username.value.trim();//trim removes white spaces.
    // console.log(usernameValue);
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordValue2 = password2.value.trim();

    if(usernameValue === ""){
        //show error
        //add error class
        setErrorFor(username,"Username cannot be blank.");
    }else{
        //add success class
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorFor(email,"Email cannot be blank.");
    }else if(!isEmail(emailValue)){
        setErrorFor(email,"Email is not valid.");
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === ""){
        setErrorFor(password,"Password cannot be blank.");
    }else{
        setSuccessFor(password);
    }

    if(passwordValue2 === "" ){
        setErrorFor(password2,"Password cannot be blank.");
    }else if(passwordValue2 !== passwordValue){
        setErrorFor(password2,"Passwords does not match.");
    }else{
        setSuccessFor(password2);
    }

    //show success message
    validateform();
}

const setErrorFor = (input,message) => {
     const formControl = input.parentElement;//.form-control
     const small = formControl.querySelector("small");
     //add error message inside small
     small.innerText = message;

     //add error class
     formControl.className = "form-control error";
}

const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

const isEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}