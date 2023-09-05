//import "./styles.css";
 
// TODO: Sett startverdien for de ulike tellerene du trenger for å ha kontroll på
let count = 0;
// - antall feil
let mistakes = 0;
// - posisjonen til bokstaven du skal skrive
let position = 0;
// - ordet som skal vises
let word = "";
// TODO: Lag en liste med ulike ord
let wordList = [
    'Hei',
    'Test',
    'Gøy',
    'Javascript',
    'Høgskole'
]
let inputWord = ""
// TODO: Hent ut HTML #ider og knappen
const DOMWord = document.getElementById('word');
const DOMLetter = document.getElementById('letter')
const DOMWrongs = document.getElementById('wrongs')
// TODO: Lag en funksjon for å skrive ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
const wordPrint = (list) => {    
    word = list.pop();
    DOMWord.innerHTML = `Skriv ord: ${word}`
}
// TODO: Lag en funksjon som gjør at vi kan bytte ord. Må også oppdatere tellerene
const changeWord = () => {
    if (word === inputWord) {
        count ++
        inputWord = ""
        position = 0
        wordPrint(wordList)
        return true;
    }
}
// TODO: Lag en funksjon for å sjekke om vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
const checkIfCorrectLetter = (e) => {
    if (word.charAt(position) === e.key) {
        inputWord += e.key
        position++
    }
    else mistakes ++;
}
// TODO: Lag en funksjon for å sjekke om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
const checkIfEndOfWord = () => {
    if (word.length === inputWord.length) {
        changeWord()
        console.log("Inside if!")
    }
    else return false
}
// TODO: Lag en funksjon som trigges når vi skriver på tastaturen og basert på hva vi skriver / posisjonen vi er på gjør nødvendige oppdateringer av grensesnittet
document.body.addEventListener('keypress', (e) => {
    console.log(e.key)
    checkIfCorrectLetter(e);
    checkIfEndOfWord();
    updateUI()
})
// TODO: Lag en funksjon som kan brukes til å oppdatere grensesnittet
const updateUI = () => {
    DOMLetter.innerHTML = `Bokstav: ${word.charAt(position)}`
    DOMWrongs.innerHTML = `Antall feil: ${mistakes}`

    }

// - Vise antall feil
// - Vise ordet vi skal skrive
// - Vise hvor langt vi har kommet (posisjonen) på det ordet vi skal skrive
// TODO: Lytt til keyup på window

// TODO: Lytt til klikk på knappen. Klikket skal gjøre knappen "disabled" samt starte oppgaven
const button = document.querySelector('button')
button.addEventListener('click', () => {
    inputWord = "";
    wordPrint(wordList)
    updateUI();
})
