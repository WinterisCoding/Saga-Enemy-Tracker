class Weapon {
    constructor(name, type, attack, damage) {
        this.name = name;
        this.type = type;
        this.attack = attack;
        this.damage = damage;
    }
}

const blasterRifle = new Weapon("Blaster Rifle", "Ranged", 1, "3d8")
const frag = new Weapon("Frag Grenade", "Ranged", 0, "4d6 2-square burst")
const lightRepeater = new Weapon("Light Repeating Blaster", "Ranged", 0, "3d8")
const blasterPistol = new Weapon("Blaster Pistol", "Ranged", 1, "3d6")
const empty = new Weapon("", "", 0, "")

const weapons = [blasterRifle, blasterPistol, lightRepeater, frag, empty]

export {weapons};