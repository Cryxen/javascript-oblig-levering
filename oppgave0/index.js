// Oppgave 1 
const removeBtn = document.getElementById('remove-btn');
const elementToRemove = document.getElementById('remove');
removeBtn.addEventListener('click', () => {
    elementToRemove.innerHTML = "";
} )
// Oppgave 2
const changeBtn = document.getElementById('change-btn');
const changeText = document.getElementById('change');
changeBtn.addEventListener('click', () => {
    changeText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec quam ex. Suspendisse cursus sed.";
})
// Oppgave 3
const textBox = document.getElementById('input');
const textField = document.getElementById('input-text')

let firstTime = true; 
//Check if inputbox has been empty.
const checkFirstTime = () => {
    if (firstTime) {
        textField.innerHTML = "";
        firstTime = false;
    }
}

textBox.addEventListener('keypress', (e) => {
    checkFirstTime();
    textField.innerHTML = textField.innerHTML += e.key;
})

// Oppgave 4
const myList = ["item one", "item two", "item three"];

const writeListBtn = document.getElementById('write-list');
const listUl = document.getElementById('ul');

writeListBtn.addEventListener('click', () => {
    myList.forEach(element => {
        const listElement = document.createElement("li");
        listElement.innerHTML = element;
        listUl.appendChild(listElement);
    });
})


// Oppgave 5
const placeholder = document.getElementById('placeholder');
const tagSelection = document.getElementById('select');
const textFieldToAdd = document.getElementById('text');
const createNewElement = document.getElementById('create');


createNewElement.addEventListener('click', () => {
    const elementToAdd = document.createElement(tagSelection.value);
    console.log(textFieldToAdd.value)
    elementToAdd.innerHTML = textFieldToAdd.value;
    placeholder.appendChild(elementToAdd);
})


// Oppgave 6
const listToExtract = document.querySelector("#list");
const removeFromListBtn = document.getElementById('remove-li');

removeFromListBtn.addEventListener('click', () => {
    listToExtract.removeChild(listToExtract.firstElementChild);
})

// Oppgave 7
const nameBox = document.getElementById('name');
const btnToColor = document.getElementById('order')
nameBox.addEventListener('keypress', () => {
    console.log(nameBox.value)
    if (nameBox.value.length > 4) {
        console.log("inside if")
        btnToColor.style.borderColor = 'red';
        btnToColor.disabled = true;
    }
})

// Oppgave 8
const ul8 = document.querySelector('.children');
const colorBtn = document.getElementById('color');
colorBtn.addEventListener('click', () => {
    for (let index = 0; index < ul8.children.length; index++) {
        const element = ul8.children[index];
        console.log(element)
        element.style.border = 'solid'
    
        if (index % 2 !== 0) {
            console.log('inside if')
            element.style.borderColor = 'pink';
        }
        else {
            element.style.borderColor = 'green';
        }
    }
})
