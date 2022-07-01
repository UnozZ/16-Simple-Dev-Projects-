var email = document.getElementById('em');
var ok = document.getElementById('ok');
var no = document.getElementById('no');
var imgNo = document.getElementById('img-no');
var imgOk = document.getElementById('img-ok');

ok.style.display = 'none';
no.style.display = 'none';
imgNo.style.display = 'none';
imgOk.style.display = 'none';

function controlla() {
    var form = document.getElementById('form');
    var email = document.getElementById('em').value;

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)){
        ok.style.display = 'block';
        imgOk.style.display = 'block';

        no.style.display = 'none';
        imgNo.style.display = 'none';

        document.getElementById('inserisci').style.borderColor = 'green';
    }else{
        no.style.display = 'block';
        imgNo.style.display = 'block';
        
        ok.style.display = 'none';
        imgOk.style.display = 'none';

        document.getElementById('inserisci').style.borderColor = 'hsl(0, 93%, 68%)';
    }
}