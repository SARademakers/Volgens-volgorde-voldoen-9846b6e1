let input = document.querySelectorAll('input');
let message = document.querySelector('h4');

var antwoord = ["Parijs", 8, "IJsselmeer", 
["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];

function antwoorden() {
    var points = 0;
    for(var i = 0; i < antwoord.length; i++) {
        var isMultipleChoice = Array.isArray(antwoord[i]);
        if(isMultipleChoice) {
            if(antwoord[i].includes(input[i].value)) {
                points++;
            }
        } 
        else {
            if(input[i].value == antwoord[i]) {
            points++;
            }
        }
    }
    return points;
}

function resultaat() {
    message.innerText = "Je hebt er " + antwoorden() + " goed";
}