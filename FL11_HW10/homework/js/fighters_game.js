function Fighter(obj) {
  this.name = obj.name;
  this.damage = obj.damage;
  this.health = obj.hp;
  this.agility = obj.agility;
  this.wins = 0;
  this.losses = 0;
  this.getName = function () {
    return this.name;
  };
  this.getDamage = function () {
    return this.damage;
  };
  this.getAgility = function () {
    return this.agility;
  };
  this.getHealth = function () {
    return this.health;
  };
  this.attack = function (defender) {
    let percent = 100;
    let block = Math.random() <= defender.agility / percent;
    if (block === true) {
      console.log(this.name + ' attack missed');
    } else {
      defender.dealDamage(this.damage);
      console.log(this.name + ' make ' + this.damage + ' damage to ' + defender.name);
    }
  };
  this.logCombatHistory = function () {
    console.log('Name: ' + this.name + ', Wins: ' + this.wins + ', Losses: ' + this.losses);
  };
  this.heal = function (amountHP) {
    let newHP = this.health + amountHP;
    if (newHP < obj.hp) {
      this.health = newHP;
    } else {
      this.health = obj.hp;
    }
  };
  this.dealDamage = function (loss) {
    let leftHP = this.health - loss;
    if (leftHP > 0) {
      this.health = leftHP;
    } else {
      this.health = 0;
    }
  };
  this.addWin = function () {
    this.wins += 1;
  };
  this.addLoss = function () {
    this.losses += 1;
  };
  return this;
}

function battle(fighter1, fighter2) {
  for (; fighter1.health > 0 && fighter2.health > 0;) {
    if (fighter1.health > 0) {
      fighter1.attack(fighter2);
    }
    if (fighter2.health > 0) {
      fighter2.attack(fighter1);
    } else if (fighter1.health === 0) {
      fighter2.addWin();
      fighter1.addLoss();
    } else if (fighter2.health === 0) {
      fighter1.addWin();
      fighter2.addLoss();
    }
  }
  if (fighter1.health === 0) {
    console.log(fighter1.name + ' is dead and can`t fight.');
  } else {
    console.log(fighter2.name + ' is dead and can`t fight.');
  }
}

const myFighter = new Fighter({
  name: 'John',
  damage: 20,
  hp: 100,
  agility: 25
});
const myFighter2 = new Fighter({
  name: 'Jack',
  damage: 10,
  hp: 120,
  agility: 40
});