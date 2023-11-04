var plusoumoins = document.getElementById('plusoumoins');
var inputField = document.getElementById('inputField');

function sortie(valeur) {
    if (valeur[0] == '-') {
        return valeur.slice(1);
    } else {
        return '-' + valeur;
    }
}

plusoumoins.onclick = function() {
    inputField.value = sortie(inputField.value);
    inputField.innerText = inputField.value;
}