const Daemon = require('../Daemon');

test('Daemon creation', () => {
    const daemon = new Daemon('David');
    expect(daemon.name).toBe('David');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
});
