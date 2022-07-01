document.getElementById('err-nome').style.display = "none";
document.getElementById('err-cognome').style.display = "none";
document.getElementById('err-emailEmpty').style.display = "none";
document.getElementById('err-emailWrong').style.display = "none";
document.getElementById('err-password').style.display = "none";

document.getElementById('nome').style.backgroundSize = "0px";
document.getElementById('cognome').style.backgroundSize = "0px";
document.getElementById('email').style.backgroundSize = "0px";
document.getElementById('password').style.backgroundSize = "0px";

function mostraPassword() {
    var password = document.getElementById('password');
    
    if(password.type === "password") {    
        password.type = "text";
    }else{
        password.type = "password";
    }
}

 

function controlla() {
    var nome = document.getElementById('nome');
    var cognome = document.getElementById('cognome');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    if(nome.value.length == 0) {
        document.getElementById('err-nome').style.display = "block";
        nome.style.backgroundSize = "27px";
        nome.style.borderColor = "hsl(0, 67%, 61%)";
    }else{
        nome.value = "ciao";
        document.getElementById('err-nome').style.display = "none";
        nome.style.backgroundSize = "0px";
        nome.style.borderColor = "rgb(186, 173, 173)";
    }

    if(cognome.value.length == 0) {
        document.getElementById('err-cognome').style.display = "block";
        cognome.style.backgroundSize = "27px";
        cognome.style.borderColor = "hsl(0, 67%, 61%)";
    }else{
        cognome.value = "ciao";
        document.getElementById('err-cognome').style.display = "none";
        cognome.style.backgroundSize = "0px";
        cognome.style.borderColor = "rgb(186, 173, 173)";
    }

    if(email.value.length === 0) {
        document.getElementById('err-emailEmpty').style.display = "block";
        email.style.backgroundSize = "27px";
        email.style.borderColor = "hsl(0, 67%, 61%)";
    }else{
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(email.value.match(pattern)){
            document.getElementById('err-emailEmpty').style.display = "none";
            document.getElementById('err-emailWrong').style.display = "none";
            email.style.backgroundSize = "0px";
            email.style.borderColor = "rgb(186, 173, 173)";
        }else{
            document.getElementById('err-emailEmpty').style.display = "none";
            document.getElementById('err-emailWrong').style.display = "block";
            email.style.backgroundSize = "27px";
            email.style.borderColor = "hsl(0, 67%, 61%)";
        }
    }

    if(password.value.length == 0) {
        document.getElementById('err-password').style.display = "block";
        password.style.backgroundSize = "27px";
        password.style.borderColor = "hsl(0, 67%, 61%)";
    }else{
        document.getElementById('password').value = "ciao";
        document.getElementById('err-password').style.display = "none";
        document.getElementById('password').style.backgroundSize = "0px";
        document.getElementById('password').style.borderColor = "rgb(186, 173, 173)";
    }
        
}

    
