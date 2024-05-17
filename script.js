const mainAllTable = document.getElementById("allTabel");
const sectionTable = document.getElementById("tabel");
const sectionButton = document.getElementById("sectionButton");

const arrayCelle = [];
const numeriEstratti = [];
/* 1. creare una tabella da 76 celle, numerate da 1 a 76 */
for (let index = 0; index <= 75; index++) {
  const cellaTabel = document.createElement("div");
  cellaTabel.classList.add("celleTabel");
  const numeroTabel = document.createElement("h3");
  cellaTabel.appendChild(numeroTabel);
  sectionTable.appendChild(cellaTabel);
  numeroTabel.innerText = index + 1;
  arrayCelle.push(cellaTabel);
  console.log(cellaTabel);
  console.log(numeroTabel);
  console.log(index);
}
/* 2. crea un bottone per l'estrazione, il numero dovra essere random da 1 a 76 */

/* creazione del button */
const buttonForExtraction = document.createElement("button");
buttonForExtraction.innerText = "Estrai un numero";
sectionButton.appendChild(buttonForExtraction);

buttonForExtraction.addEventListener("click", function (event) {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 76) + 1;
    if (numeriEstratti.length > 76) {
      break;
    }
  } while (numeriEstratti.includes(randomNumber));

  numeriEstratti.push(randomNumber);
  /*   console.log(randomNumber); */
  /* 3. dopo il clik del bottone evidenzia la cella corrispondente al numero cambiando il coloro o il bordo*/
  arrayCelle[randomNumber - 1].classList.add("numeroEstratto");
});

/* 4. mantieni evidenziato le celle che sono state estratte in precedenza */
/* non serve nessun istruzione poiche lascerò la classe attiva alle celle selezionate */

const buttonForTabellina = document.createElement("button");
buttonForTabellina.classList.add("buttonTabellina");
const sectionTabellina = document.getElementById("sectionTabellina");
sectionTabellina.appendChild(buttonForTabellina);
buttonForTabellina.innerText = "Clicca qui per Ludopatia";

/* creo eveto click per il tasto ludopatia */
buttonForTabellina.addEventListener("click", function (event) {
  for (let index = 0; index < 23; index++) {
    const cellaForTabellina = document.createElement("div");
    cellaForTabellina.classList.add("cellaForTabellina");
    const numeroTabellina = document.createElement("h4");
    sectionTabellina.appendChild(cellaForTabellina);
    cellaForTabellina.appendChild(numeroTabellina);
    let randomNumberForTabellina = Math.floor(Math.random() * 23) + 1;
    numeroTabellina.innerText = randomNumberForTabellina;
  }
});
