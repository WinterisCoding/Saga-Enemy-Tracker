
class abilities {
    constructor(str, dex, con, int, wis, cha) {
        this.strength = str;
        this.dexterity = dex;
        this.constitution = con;
        this.intelligence = int;
        this.wisdom = wis;
        this.charisma = cha;
    }
}

const StormtrooperStats = new abilities(12, 11, 11, 10, 10, 10)
const HeavyStats = new abilities()
const ScoutStats = new abilities()

export {StormtrooperStats};