const Bowman = require('../Bowman');

test('Bowman creation', () => {
    const bowman = new Bowman('Alice');
    expect(bowman.name).toBe('Alice');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
});
