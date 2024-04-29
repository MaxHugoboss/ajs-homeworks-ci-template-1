const Magician = require('../Magician');

test('Magician creation', () => {
    const magician = new Magician('Charlie');
    expect(magician.name).toBe('Charlie');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
});
