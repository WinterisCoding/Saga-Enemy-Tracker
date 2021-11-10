
const enemies = [
    {
    name: "Stormtrooper",
    hp: 10,
    attack: "+5"
    },
    {
    name: "Heavy Stormtrooper",
    hp: 15,
    attack: "+6"
    }
]

class enemy {
    constructor() {
        this.hp = 10;
        this.speed = 30;
        this.attacks = {
            weapon: {
                attack: 4,
                damage: "3d8"
            },
            "Frag Grenade": {
                attack: 3,
                damage: "4d6, 2-square burst"
            }
        };
        this.damage = "3d8";
        this.threshold = 12;
        this.refDefense = 16;
        this.fortDefense = 12;
        this.willDefense = 10;
        this.special = "Coordinated Attack"
        this.skills = {
            Endurance: 7,
            Perception: 9
        };
    }
}

export {enemies};