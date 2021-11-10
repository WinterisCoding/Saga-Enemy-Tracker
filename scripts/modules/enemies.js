import {weapons} from "./weapons.js"


const {blasterRifle, blasterPistol, lightRepeater, frag} = weapons

class Enemy {
    constructor(name, hp, initiative, speed, baseAttack, primaryAttack, secondAttack, threshold, refDefense, fortDefense, willDefense) {
        this.name = name
        this.hp = hp;
        this.initiative = initiative;
        this.speed = speed;
        this.baseAttack = baseAttack;
        this.primaryAttack = primaryAttack;
        this.secondAttack = secondAttack 
        this.threshold = threshold;
        this.refDefense = refDefense;
        this.fortDefense = fortDefense;
        this.willDefense = willDefense;
        this.special = "Coordinated Attack"
        this.skills = {
            Endurance: 7,
            Perception: 9
        };
    }
}


const Stormtrooper = new Enemy("Stormtrooper", 10, 2, 30, 3, blasterRifle, frag, 12, 16, 12, 10)
const HeavyStormtrooper = new Enemy("Heavy Stormtrooper", 20, 4, 30, 6, lightRepeater, frag, 12, 16, 12, 9)
const ScoutTrooper = new Enemy("Scout Trooper", 21, 4, 30, 4, blasterPistol, blasterRifle, 11, 15, 11, 10)

const enemies = [ Stormtrooper, HeavyStormtrooper, ScoutTrooper];

export {enemies};