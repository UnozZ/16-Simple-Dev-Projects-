function cambiaPiano() {
    if(document.getElementById('piano').checked == true){
        document.getElementById('numero').innerHTML = '19.99'; 
    }else{
        document.getElementById('numero').innerHTML = '29.99';
    }
}