const Manager = require ('../lib/Manager');

test('can get officeNumber via constructor', () => {
    const value = 500;
    const employee = new Manager('Judy', 'M1245', 'test@test.com', value, Manager);

    expect(employee.officeNumber).toBe(value);
});

test('can get title via constructor', () => {
    const title = 'Manager';
    const manager = new Manager('Judy', 'M1245', 'test@test.com', 500, title);

    expect(manager.title).toBe(title);

});





