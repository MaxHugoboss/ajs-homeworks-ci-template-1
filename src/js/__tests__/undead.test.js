const Undead = require('../Undead');

test('Undead creation', () => {
    const undead = new Undead('Eve');
    expect(undead.name).toBe('Eve');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
});
