import {enemies} from "./modules/enemies.js"

const SWApp = {}

SWApp.menu = document.getElementById('enemy');
SWApp.formElement = document.querySelector('form')
SWApp.enemies = enemies;

// Function to display all the enemy options for the user to select
SWApp.getOptions = () => {
    SWApp.enemies.forEach((enemy) => {
        console.log(enemy)
        let option = document.createElement("option")
        option.value = enemy.name;
        option.innerText = enemy.name;
        SWApp.menu.appendChild(option)
    })
}

// Function to handle the submit event and add the enemy to the roster
SWApp.selectEnemy = () => {
    SWApp.formElement.addEventListener('submit', (e) => {
        e.preventDefault();

        let option = document.querySelector('select')
        console.log(option.value)
    })
}

// function to initialize our app and call our first function
SWApp.init = () => {
    SWApp.getOptions();
    SWApp.selectEnemy();

}

SWApp.init()