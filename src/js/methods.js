export class Character {
    constructor(name, type) {
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Name must be a string with length from 2 to 10 characters');
      }
  
      const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!types.includes(type)) {
        throw new Error('Incorrect character type');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = 0;
      this.defence = 0;
    }
  
    levelUp() {
      if (this.health === 0) {
        throw new Error("Can't level up a dead character");
      }
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  
    damage(points) {
      if (this.health > 0) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
          this.health = 0;
        }
      }
    }
}