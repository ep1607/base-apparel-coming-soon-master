
function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)) {
        document.getElementById("formError").innerHTML="";
        document.getElementById("email_input").style.border="1px solid hsl(0, 36%, 70%)";
        document.getElementById("error_icon").style.display="none";
        document.subscribeForm.femail.focus();
        return true;
    } else {
        document.getElementById("formError").innerHTML="Please provide valid email";
        document.getElementById("email_input").style.border="2px solid hsl(0, 93%, 68%)";
        document.getElementById("error_icon").style.display="block";
        document.subscribeForm.femail.focus();
        return false;
    }
 }