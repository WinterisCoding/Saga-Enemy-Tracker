import {enemies} from "./modules/enemies.js"

const SWApp = {}

SWApp.menu = document.getElementById('enemy');
SWApp.formElement = document.querySelector('form')
SWApp.roster = document.querySelector('.enemyRoster')
SWApp.enemies = enemies;

// Function to display all the enemy options for the user to select
SWApp.getOptions = () => {
    SWApp.enemies.forEach((enemy, index) => {
        // console.log(enemy)
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
                    <p class="instance"></p>
                    <h3>${enemy.name}</h3>
                    <div class="stats">
                        <p>Str: ${enemy.stats.strength}</p>
                        <p>Dex: ${enemy.stats.dexterity}</p>
                        <p>Con: ${enemy.stats.constitution}</p>
                        <p>Int: ${enemy.stats.intelligence}</p>
                        <p>Wis: ${enemy.stats.wisdom}</p>
                        <p>Cha: ${enemy.stats.charisma}</p>
                    </div>
                    <button class="closeButton">×</button>
                    <div class="info">
                        <p>Initiative: +${enemy.initiative}</p>
                        <p>Speed: ${enemy.speed}ft</p>
                        <p>Base Attack: +${enemy.baseAttack}</p>
                    </div> <!-- end of info-->
                    <div class="defenses">
                        <p>Reflex: ${enemy.refDefense}</p>
                        <p>Fortitude: ${enemy.fortDefense}</p>
                        <p>Will: ${enemy.willDefense}</p>
                    </div><!--end of defenses-->
                    <div class="attacksContainer">
                        <div class="primary attack">
                            <h4>${enemy.primaryAttack.name}</h4>
                            <p>Type: ${enemy.primaryAttack.type}</p>
                            <p>Damage: ${enemy.primaryAttack.damage}</p>
                        </div> <!--end of Primary Attack-->
                        <div class="secondary attack">
                            <h4>${enemy.secondAttack.name}</h4>
                            <p>Type: ${enemy.secondAttack.type}</p>
                            <p>Damage: ${enemy.secondAttack.damage}</p>
                        </div> <!--end of Secondary Attack-->
                    </div> <!-- end of attacks container-->
                    <div class="hpContainer">
                        <p>Hit Points:</p>
                        <p class="hp">${enemy.hp}</p> 
                        <button class="minus">-</button> 
                        <button class="plus">+</button>
                    </div> <!--end of hpContainer-->
                    <div class="skills">
                    </div>
    `
    enemy.skills.forEach((skill) => {
        let entry = document.createElement('p')
        entry.innerHTML = `${skill.name}: +${skill.value}`
        
        let skills = enemyElement.querySelector('.skills')
        
        skills.appendChild(entry)
    });

    SWApp.roster.appendChild(enemyElement);
    SWApp.damage();
    SWApp.counter(enemy);
}

// Function to manage damage/healing and deletion
SWApp.damage = () => {
    let enemyElements = SWApp.roster.children;
    for(let i = 0; i < enemyElements.length; i++) {
        let closeButton = enemyElements[i].querySelector(".closeButton")
        let addbutton = enemyElements[i].querySelector(".plus")
        let minusButton = enemyElements[i].querySelector(".minus")
        let health = enemyElements[i].querySelector('.hp')
        let healthValue = parseInt(health.innerText)
        addbutton.addEventListener('click', () => {
            healthValue = healthValue + 1;
            health.innerHTML = `${healthValue}`
        })
        minusButton.addEventListener('click', () => {
            healthValue = healthValue - 1;
            health.innerHTML = `${healthValue}`
        })
        closeButton.addEventListener('click', (e) => {
            let x = e.target.parentElement;
            SWApp.roster.removeChild(x)
        })
    }
}

// A function to add identifies to each repetition of a particular enemy.
SWApp.counter = (enemy) => {
    // Loop through the roster
    // For each element with the same name assign counter value
    // Increase the counter
    let counter = 1
    let id = enemy.name
    let roster = SWApp.roster.children;
    roster.forEach((enemyCard) => {
        let instance = document.querySelector('.instance')
        instance.innerHTML = `${counter}`

        counter = +1;
    })
}



// function to initialize our app and call our first function
SWApp.init = () => {
    SWApp.getOptions();
    SWApp.selectEnemy();
}

SWApp.init()