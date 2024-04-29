const Character = require('../Character');

test('Character creation with valid name and type', () => {
    const character = new Character('Alice', 'Bowman');
    expect(character.name).toBe('Alice');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
});

test('Character creation with invalid name', () => {
    expect(() => {
        new Character('A', 'Bowman');
    }).toThrow('Name should be a string with length between 2 and 10 characters');
});

test('Character creation with invalid type', () => {
    expect(() => {
        new Character('Alice', 'InvalidType');
    }).toThrow('Invalid type');
});
