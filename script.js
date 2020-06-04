var button = document.getElementById("button");
var input = document.getElementById("email");

button.addEventListener("click", validateEmail);

function validateEmail() {

    var email = input.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.match(mailformat)) {
        document.getElementById("formError").innerHTML="";
        document.getElementById("email").style.border="1px solid hsl(0, 36%, 70%)";
        document.getElementById("error_icon").style.display="none";
        document.subscribeForm.femail.focus();
        return true;
    } else {
        document.getElementById("formError").innerHTML="Please provide valid email";
        document.getElementById("email").style.border="2px solid hsl(0, 93%, 68%)";
        document.getElementById("error_icon").style.display="block";
        document.subscribeForm.femail.focus();
        return false;
    }

 }