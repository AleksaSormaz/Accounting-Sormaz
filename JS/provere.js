let f = document.querySelector('#formular');

f.addEventListener('submit', function (ev) {
    let polje;

    //Ime i prezime
    polje = document.getElementById('name');

    if (polje.value == null || polje.value == "") {
        alert('Molim unesite Vase ime!');
        polje.focus();
        ev.preventDefault();
        return false;
    }

    korisnickoIme = polje.value.trim();
    malaSlova = "qwertzuiopšđžasdfghjklčćyxcvbnm";
    velikaSlova = "QWERTZUIOPŠĐŽASDFGHJKLČĆYXCVBNM";

    for (let i = 0; i < korisnickoIme.length; ++i) {
        const tekuciKarakter = korisnickoIme.charAt(i);

        if (
            malaSlova.indexOf(tekuciKarakter) === -1 &&
            velikaSlova.indexOf(tekuciKarakter) === -1
        ) {
            alert('Greska pri unosu imena');
            polje.focus();
            ev.preventDefault();
            return false;
        }
    }

    polje = document.getElementById('surname');

    if (polje.value == null || polje.value == "") {
        alert('Molim unesite Vase prezime!');
        polje.focus();
        ev.preventDefault();
        return false;
    }

    korisnickoIme = polje.value.trim();
    malaSlova = "qwertzuiopšđžasdfghjklčćyxcvbnm";
    velikaSlova = "QWERTZUIOPŠĐŽASDFGHJKLČĆYXCVBNM";

    for (let i = 0; i < korisnickoIme.length; ++i) {
        tekuciKarakter = korisnickoIme.charAt(i);

        if (
            malaSlova.indexOf(tekuciKarakter) === -1 &&
            velikaSlova.indexOf(tekuciKarakter) === -1
        ) {
            alert('Greska pri unosu prezimena');
            polje.focus();
            ev.preventDefault();
            return false;
        }
    }

    //Telefon
    polje = document.getElementById('tel');
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    alert(polje.value);
    alert(regex.test(polje.value));
    
    for (let i = 0; i < polje.length; i++) {
        if (polje.value == '' || !regex.test(polje.value)) {
            ev.preventDefault();
            alert('Greska pri unosu broja telefona');
            polje.focus();
            return false;
        }
        else {
            if (!(polje.value[i] == '+' && polje.value.indexOf[i] == 3 && polje.value.indexOf[2] == 8 && polje.value.indexOf[3] == 1)) {
                ev.preventDefault();
                alert('Greska pri unosu broja telefona');
                polje.focus();
                return false;
            }

            if (!(polje.value.indexOf[0] == 0 && polje.value.indexOf[1] == 6)) {
                ev.preventDefault();
                alert('Greska pri unosu broja telefona');
                polje.focus();
                return false;
            }
        }
    }
    //Mail
    polje = document.getElementById('mail');
    polje.value.trim();

    if (polje.value == null || polje.value == '') {
        ev.preventDefault();
        polje.focus();
        alert('Molim unesite Vas email');
        return false;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputText.value.match(mailformat)) {
        alert("Ne validna email adresa!");
        ev.preventDefault();
        polje.focus();
        return false;
    }


    //Naziv firme
    polje = document.getElementById('company_name');

    polje.value.trim();

    if (polje.value == null || polje.value == '') {
        ev.preventDefault();
        polje.focus();
        alert('Molim unesite naziv Vase firme');
        return false;
    }

    //PIB firme
    //Ne sme da ima ni manje ni vise od 9 cifara!!!
    polje = document.getElementById('pib');

    polje.value.trim();
    let cifre = '0123456789';

    if (polje.value == '' || polje.value == null || polje.length != 9 || polje.value != cifre) {
        ev.preventDefault();
        polje.focus();
        alert('Molim pravilno unesite pib Vase firme!');
        return false;
    }
});

f.addEventListener('reset', function (ev) {
    const treba_resetovati = window.confirm('Da li zelite da ponistite unos?');

    if (!treba_resetovati) {
        ev.preventDefault();
        return false;
    }
    return true;
});