let username=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("password");
let cnfpassword=document.getElementById("cnf-password");
let usernameerr=document.getElementById("usernameerr");
let emailerr=document.getElementById("emailerr")
let passworderr=document.getElementById("passworderr");
let cnfpassworderr=document.getElementById("cnf-passworderr");
let HideunhidePassword=document.getElementById("HideunhidePassword");
let HideunhidePassword2=document.getElementById("HideunhidePassword2");
let submit=document.getElementById("submit");
let PopUp=document.getElementsByClassName("PopUp");
let SignUp=document.getElementsByClassName("SignUp");
let Cross=document.getElementsByClassName("Cross");



let check = () => {

    let isCorrect=true;

    if( username.value.length<3 || username.value.length >25){
        usernameerr.style.display="inline";
        username.setAttribute("id","Wrong");
        isCorrect=false;
    }
    else {
        usernameerr.style.display="none";
        username.setAttribute("id","Right");
    }

    if(validateEmail(email.value)){
        email.setAttribute("id","Right");
        emailerr.style.display="none";
    }
    else
    {
        email.setAttribute("id","Wrong");
        emailerr.style.display="inline";
        isCorrect=false;
    }

    if(validatePassword(password.value)){
        password.setAttribute("id", "Right");
        passworderr.style.display = "none";
    } 
    else 
    {
        password.setAttribute("id", "Wrong");
        passworderr.style.display = "inline";
        isCorrect = false;
    }

    if(cnfpassword.value!=password.value){
        passworderr.style.display="inline";
        cnfpassworderr.style.display="inline";
        cnfpassword.setAttribute("id","Wrong");
        isCorrect = false;
    }
    else
    {
        cnfpassworderr.style.display="none";
        cnfpassword.setAttribute("id","Right");
    }

    return isCorrect;
};

HideunhidePassword.addEventListener("click", (e) => {
  if (
    HideunhidePassword.attributes.src.nodeValue ==
    "https://img.icons8.com/material-two-tone/24/000000/hide.png"
  ) {
    HideunhidePassword.attributes.src.nodeValue =
      "https://img.icons8.com/material-two-tone/24/000000/visible.png";
    password.type = "text";
  } else {
    HideunhidePassword.attributes.src.nodeValue =
      "https://img.icons8.com/material-two-tone/24/000000/hide.png";
    password.type = "password";
  }
});

HideunhidePassword2.addEventListener("click", (e) => {
  if (
    HideunhidePassword2.attributes.src.nodeValue ==
    "https://img.icons8.com/material-two-tone/24/000000/hide.png"
  ) {
    HideunhidePassword2.attributes.src.nodeValue =
      "https://img.icons8.com/material-two-tone/24/000000/visible.png";
    cnfpassword.type = "text";
  } else {
    HideunhidePassword2.attributes.src.nodeValue =
      "https://img.icons8.com/material-two-tone/24/000000/hide.png";
    cnfpassword.type = "password";
  }
});


const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
  
  const validatePassword = (password) => {
    return password.match(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,100}$/
    );
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (check()) {
      PopUp[0].style.display = "flex";
      SignUp[0].style.opacity = "0.5";
    }
});

Cross[0].addEventListener("click",(e) => {
    PopUp[0].style.display="none";
    location.reload();
})










  