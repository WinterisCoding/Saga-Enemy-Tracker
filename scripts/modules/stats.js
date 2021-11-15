
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
const HeavyStats = new abilities(15, 11, 10, 12, 9, 8)
const ScoutStats = new abilities(10, 13, 12, 10, 11, 8)
const corSecTrooperStats = new abilities(13, 13, 12, 10, 10, 10)
const imperialOfficerStats = new abilities(10, 8, 10, 12, 12, 14)
const deathTrooperStats = new abilities(16, 16, 16, 12, 10, 14) 

const stats = [StormtrooperStats, HeavyStats, ScoutStats, corSecTrooperStats, imperialOfficerStats, deathTrooperStats]

export {stats};