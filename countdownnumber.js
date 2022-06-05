/*
Descrizione:
Visualizzare in pagina (html) 5 numeri casuali.
Avviare un timer di 30 secondi
Dopo 30 secondi, nascondere i numeri.
L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



Da dove partire:

Creare un array con 5 numeri random al uo interno
Stamparli sulla pagina HTML
Avviare un Timer di 30 secondi finito il ciclo di generazione 
Dopo di che creare un nuovo ciclo nel quale :
    chiedere per 5 volte all'utente di inserire dei numeri al suo interno
    dopo aver nserito i numero confrontare i due array e valutare se essi racchiudano i stessi numeri.
*/

let arrayNumberOne = [];

let arrayNumberTwo = [];

let arrayNumeriValidati = [];

for (let i = 0; i < 5; i++){

    let numeriGenerati = Math.round(Math.random() * 100) + 1;
    
    if(arrayNumberOne.includes(numeriGenerati)) {
        i--;
    } else {
        arrayNumberOne.push(numeriGenerati);
        
    }

}
console.log(arrayNumberOne);

const numeriRndomiciVisbili = document.getElementById('numeriRandomici')

numeriRndomiciVisbili.innerHTML = `${arrayNumberOne}`;

const scdenzaTempo = document.getElementById("timer30secondi")

let secondiRimanenti = 30


countdownInterval = setInterval( function () {
    secondiRimanenti--;

    const ore = Math.floor(secondiRimanenti / 3600);
    const minuti = Math.floor(secondiRimanenti % 3600 / 60);
    const secondi = Math.floor(secondiRimanenti % 60);

    scdenzaTempo.innerHTML = ore + ":" + minuti + ":" + secondi; 

    if(secondiRimanenti === 0){
        clearInterval(countdownInterval);
    }
}, 1000);

setTimeout (numerinascosti, 30000);

        function numerinascosti () {
            numeriRndomiciVisbili.remove(` ${arrayNumberOne} `);

            setTimeout(userNumbers, 0);

            setTimeout(checkAnswer, 0);
        }


        function userNumbers () {
        
            for (let i = 0; i < 5; i++) {
                let numeriInseritiUtente = parseInt(prompt("Inserisci i numeri visti poco fa :"));
                
                arrayNumberTwo.push(numeriInseritiUtente);
            }
        }


        function checkAnswer() {

            for (let i = 0; i < arrayNumberOne.length; i++) {

                if (arrayNumberOne.includes(arrayNumberTwo[i])) {

                    if(arrayNumeriValidati.includes(arrayNumberTwo[i])) {
                        i++
                    } else {
                        arrayNumeriValidati.push(arrayNumberTwo[i]);    
                    }   
                }
            } 
        }


        setTimeout (alertNumeriCorretti, 33000);

    
            function alertNumeriCorretti () {
                let numeriCorrettiInseriti = arrayNumeriValidati.length;
                if(numeriCorrettiInseriti === 5) {
                    alert(`Hai indovinato  ${numeriCorrettiInseriti} numeri. Eddaje sei un boss... Hai indovinato tutti i numeri!`);
                }
                    if(numeriCorrettiInseriti === 4) {
                        alert(`Hai indovinato  ${numeriCorrettiInseriti} numeri. Eddaje sei un semiboss... Comunque hai indovinato i numeri: ${arrayNumeriValidati}`);
                    }
                    if(numeriCorrettiInseriti === 3) {
                        alert(`Hai indovinato  ${numeriCorrettiInseriti} numeri. EH vabbè riprova zio... Comunque hai indovinato i numeri: ${arrayNumeriValidati}`);
                    }
                    if(numeriCorrettiInseriti === 2) {
                        alert(`Hai indovinato  ${numeriCorrettiInseriti} numeri. Eddai credevo in te... Comunque hai indovinato i numeri: ${arrayNumeriValidati}`);
                    }
                    if(numeriCorrettiInseriti === 1) {
                        alert(`Hai indovinato  ${numeriCorrettiInseriti} numeri. Bro non va bene, ma poteva andare peggio. Comunque hai indovinato il numero: ${arrayNumeriValidati}`);
                    } 
                    if (numeriCorrettiInseriti = 0) {
                        alert(`Hai indovinato  ${numeriCorrettiInseriti} numer0. Io mi farei vedere`);
                    }
            }

