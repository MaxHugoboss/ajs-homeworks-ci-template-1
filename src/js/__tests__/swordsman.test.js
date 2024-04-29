const Swordsman = require('../Swordsman');

test('Swordsman creation', () => {
    const swordsman = new Swordsman('Bob');
    expect(swordsman.name).toBe('Bob');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
});
