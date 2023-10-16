let sprawdz1 = true;
let sprawdz2 = true;
let sprawdz3 = true;

let przycisk1 = document.getElementById('litery');
let przycisk2 = document.getElementById('cyfry');
let przycisk3 = document.getElementById('interpunkcja');
let ileliczb = document.getElementById('iloscliczb');


przycisk1.onclick = function(){
    if(sprawdz1 == true){
        przycisk1.style.transition = '800ms';
        przycisk1.style.backgroundColor = 'red';
        przycisk1.value = 'NO';
        sprawdz1 = false;
    }
    else{
        przycisk1.style.transition = '800ms';
        przycisk1.style.backgroundColor = 'rgb(23, 193, 97)';
        przycisk1.value = 'YES';
        sprawdz1 = true;
    }
}
przycisk2.onclick = function(){
    if(sprawdz2 == true){
        przycisk2.style.transition = '800ms';
        przycisk2.style.backgroundColor = 'red';
        przycisk2.value = 'NO';
        sprawdz2 = false;
    }
    else{
        przycisk2.style.transition = '800ms';
        przycisk2.style.backgroundColor = 'rgb(23, 193, 97)';
        przycisk2.value = 'YES';
        sprawdz2 = true;
    }
}
przycisk3.onclick = function(){
    if(sprawdz3 == true){
        przycisk3.style.transition = '800ms';
        przycisk3.style.backgroundColor = 'red';
        przycisk3.value = 'NO';
        sprawdz3 = false;
    }
    else{
        przycisk3.style.transition = '800ms';
        przycisk3.style.backgroundColor = 'rgb(23, 193, 97)';
        przycisk3.value = 'YES';
        sprawdz3 = true;
    }
}

function czyscioch(){
    let kasownik = document.getElementById('password');
    kasownik.value = '';
}

function generatorhasla(){
    if(ileliczb.value<1 || ileliczb.value>200){
        ileliczb.value = '';
        alert('The number of characters is not in the range 1-200!');
    }
    else{
        var password = document.getElementById("password");

        var all = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var cyfryilitery = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var cyfryiinterpunkcje = '0123456789!@#$%^&*()';
        var literyiinterpunkcje = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var cyferki = '0123456789';
        var literki = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var interpunkcje = '!@#$%^&*()';
        var passwordLength = parseFloat(ileliczb.value);
        var password = "";    

        if(sprawdz1 == true && sprawdz2 == true && sprawdz3 == true){
        for (var i = 0; i <= passwordLength -1; i++) {
                var randomNumber = Math.floor(Math.random() * all.length);
                password += all.substring(randomNumber, randomNumber +1);
            } 
        } 
        else if(sprawdz1 == true && sprawdz2 == true && sprawdz3 == false){
            for (var i = 0; i <= passwordLength -1; i++) {
                var randomNumber = Math.floor(Math.random() * cyfryilitery.length);
                password += cyfryilitery.substring(randomNumber, randomNumber +1);
            } 
        }
        else if(sprawdz1 == true && sprawdz2 == false && sprawdz3 == false){
            for (var i = 0; i <= passwordLength -1; i++) {
                var randomNumber = Math.floor(Math.random() * cyferki.length);
                password += cyferki.substring(randomNumber, randomNumber +1);
            } 
        }
        else if(sprawdz1 == false && sprawdz2 == true && sprawdz3 == true){
            for (var i = 0; i <= passwordLength -1; i++) {
                var randomNumber = Math.floor(Math.random() * literyiinterpunkcje.length);
                password += literyiinterpunkcje.substring(randomNumber, randomNumber +1);
            } 
        }
        else if(sprawdz1 == false && sprawdz2 == true && sprawdz3 == false){
            for (var i = 0; i <= passwordLength -1; i++) {
                var randomNumber = Math.floor(Math.random() * literki.length);
                password += literki.substring(randomNumber, randomNumber +1);
            } 
        }
        else if(sprawdz1 == false && sprawdz2 == false && sprawdz3 == true){
            for (var i = 0; i <= passwordLength -1; i++) {
                var randomNumber = Math.floor(Math.random() * interpunkcje.length);
                password += interpunkcje.substring(randomNumber, randomNumber +1);
            } 
        }
        else if(sprawdz1 == true && sprawdz2 == false && sprawdz3 == true){
            for (var i = 0; i <= passwordLength -1; i++) {
                var randomNumber = Math.floor(Math.random() * cyfryiinterpunkcje.length);
                password += cyfryiinterpunkcje.substring(randomNumber, randomNumber +1);
            } 
        }

        document.getElementById("password").value = password;
    }    
}

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");  
}
