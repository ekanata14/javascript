// OBJECT COMPOSITION JAVASCRIPT
const canFight = self => ({
    fight: () => console.log(`${self.name} Attacking the foe`)
});

const canSmoke = self => ({
    smoke: () =>{
        console.log(`${self.name} Smoking the door`);
        self.stamina -= 5;
    }
    
})

const fighter = (name) => {
    let self = {
        name,
        health: 100,
        stamina: 100
    }

    return Object.assign(self, canFight(self));
}

const smoker = (name) => {
    let self = {
        name,
        health: 100,
        stamina: 100
    }

    return Object.assign(self, canSmoke(self));
}

const gakure = fighter('gakure');
gakure.fight();

const jett = fighter('jett');
jett.fight();

const omen = smoker('omen');
omen.smoke();
console.log(omen.stamina);
omen.smoke();
console.log(omen.stamina);