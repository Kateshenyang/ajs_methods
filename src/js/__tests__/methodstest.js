import { Character } from '../methods';

describe('Character class tests', () => {
  let character;

  beforeEach(() => {
    character = new Character('Archer', 'Bowman');
  });

  test('Character levelUp with positive health', () => {
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBeCloseTo(0 * 1.2);
    expect(character.defence).toBeCloseTo(0 * 1.2);
    expect(character.health).toBe(100);
  });

  test('Character levelUp with zero health', () => {
    character.health = 0;
    expect(() => character.levelUp()).toThrow("Can't level up a dead character");
  });

  test('Character takes damage with positive health', () => {
    character.defence = 10;
    expect(character.health).toBeCloseTo(100 - 50 * (1 - 10 / 100));
  });

  test('Character takes damage resulting in negative health', () => {
    character.defence = 10;
    character.damage(200);
    expect(character.health).toBe(0);
  });

  test('Character takes no damage when already at zero health', () => {
    character.health = 0;
    character.damage(50);
    expect(character.health).toBe(0);
  });
});
