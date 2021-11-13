import {enemies} from "./modules/enemies.js"

const SWApp = {}

SWApp.menu = document.getElementById('enemy');
SWApp.formElement = document.querySelector('form')
SWApp.roster = document.querySelector('.enemyRoster')
SWApp.enemies = enemies;

// Function to display all the enemy options for the user to select
SWApp.getOptions = () => {
    SWApp.enemies.forEach((enemy, index) => {
        console.log(enemy)
        let option = document.createElement("option")
        option.value = index;
        option.innerText = enemy.name;
        SWApp.menu.appendChild(option)
    })
}

// Function to handle the submit event and add capture which enemy is selected
SWApp.selectEnemy = () => {
    SWApp.formElement.addEventListener('submit', (e) => {
        e.preventDefault();

        let option = document.querySelector('select')
        SWApp.displayEnemy(option.value)
    })
}

// function to display the selected enemy
SWApp.displayEnemy = (id) => {
    let enemy = SWApp.enemies[id]
    let enemyElement = document.createElement('li');

    enemyElement.innerHTML = `
    <li>
                    <h3>${enemy.name}</h3>
                    <button class="closeButton">X</button>
                    <div class="info">
                        <p>Initiative: ${enemy.initiative}</p>
                        <p>Speed: ${enemy.speed}</p>
                        <p>Base Attack: ${enemy.baseAttack}</p>
                    </div> <!-- end of info-->
                    <div class="defenses">
                        <p>Reflex: ${enemy.refDefense}</p>
                        <p>Fortitude: ${enemy.fortDefense}</p>
                        <p>Will: ${enemy.willDefense}</p>
                    </div><!--end of defenses-->
                    <div class="attacksContainer">
                        <div class="primary attack">
                            <h4>${enemy.primaryAttack.name}</h4>
                            <p>${enemy.primaryAttack.type}</p>
                            <p>${enemy.primaryAttack.damage}</p>
                        </div> <!--end of Primary Attack-->
                        <div class="secondary attack">
                            <h4>${enemy.secondAttack.name}</h4>
                            <p>${enemy.secondAttack.type}</p>
                            <p>${enemy.secondAttack.damage}</p>
                        </div> <!--end of Secondary Attack-->
                    </div> <!-- end of attacks container-->
                    <div class="hpContainer">
                        <p>Hit Points:</p>
                        <p class="hp">${enemy.hp}</p> 
                        <button class="minus">-</button> 
                        <button class="plus">+</button>
                    </div> <!--end of hpContainer-->
                </li>
    `
    SWApp.roster.appendChild(enemyElement);
    SWApp.damage();
}

// Function to manage damage/healing 
SWApp.damage = () => {
    let enemyElements = SWApp.roster.children;
    for(let i = 0; i < enemyElements.length; i++) {
        let addbutton = enemyElements[i].querySelector(".plus")
        let minusButton = enemyElements[i].querySelector(".minus")
        let health = enemyElements[i].querySelector('.hp')
        let healthValue = parseInt(health.innerText)
        console.log(health)
        addbutton.addEventListener('click', () => {
            healthValue = healthValue + 1;
            health.innerHTML = `${healthValue}`
        })
        minusButton.addEventListener('click', () => {
            healthValue = healthValue - 1;
            health.innerHTML = `${healthValue}`
        })
    }
    
}


// function to initialize our app and call our first function
SWApp.init = () => {
    SWApp.getOptions();
    SWApp.selectEnemy();
}

SWApp.init()