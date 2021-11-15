import {weapons} from "./weapons.js"
import { stats } from "./stats.js";
import { skills } from "./skills.js";

const [StormtrooperSkills, HeavySkills, ScoutSkills, OfficerSkills, corSecTrooperSkills, DeathTrooperSkills] = skills


const [blasterRifle, blasterPistol, lightRepeater, frag, empty] = weapons;
const [StormtrooperStats, HeavyStats, ScoutStats, corSecTrooperStats, imperialOfficerStats, deathTrooperStats] = stats;

class Enemy {
    constructor(name, hp, initiative, speed, baseAttack, primaryAttack, secondAttack, threshold, refDefense, fortDefense, willDefense, stats, skills) {
        this.name = name
        this.hp = hp;
        this.initiative = initiative;
        this.speed = speed;
        this.baseAttack = baseAttack;
        this.primaryAttack = primaryAttack;
        this.secondAttack = secondAttack;
        this.threshold = threshold;
        this.refDefense = refDefense;
        this.fortDefense = fortDefense;
        this.willDefense = willDefense;
        this.stats = stats;
        this.skills = skills;
    }
}


const Stormtrooper = new Enemy("Stormtrooper", 10, 2, 30, 3, blasterRifle, frag, 12, 16, 12, 10, StormtrooperStats, StormtrooperSkills)

const HeavyStormtrooper = new Enemy("Heavy Stormtrooper", 20, 4, 30, 6, lightRepeater, frag, 12, 16, 12, 9, HeavyStats, HeavySkills)

const ScoutTrooper = new Enemy("Scout Trooper", 21, 4, 30, 4, blasterPistol, blasterRifle, 11, 15, 11, 10, ScoutStats, ScoutSkills)

const imperialOfficer = new Enemy("Imperial Officer", 33, 3, 30, 6, blasterPistol, empty, 14, 15, 15, 18, imperialOfficerStats, OfficerSkills)

const corSecTrooper = new Enemy("CorSec Trooper", 18, 4, 30, 3, blasterRifle, frag, 14, 16, 14, 12, corSecTrooperStats, corSecTrooperSkills)

const deathTrooper = new Enemy("DeathTrooper", 55, 6, 30, 8, blasterRifle, frag, 22, 20, 16, 14, deathTrooperStats, DeathTrooperSkills )

const enemies = [ Stormtrooper, HeavyStormtrooper, ScoutTrooper, imperialOfficer, corSecTrooper, deathTrooper];

export {enemies};