const Employee = require('../lib/Employee.js');

test('Can create an Employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
});

test('Can set name via constructor', () => {
    const name = "Denise";
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
});

test('Can set id via constuctor', () => {
    const id = "A1234";
    const employee = new Employee('Denise', id);

    expect(employee.id).toBe(id);
});

test('Can set email via constructor', () => {
    const email = "dmtuominen@gmail.com";
    const employee = new Employee('Denise', 'A1234', email);

    expect(employee.email).toBe(email);
});

test ('Can set title via constructor', () => {
    const title = 'Employee';
    const employee = new Employee ('Denise', 'A1234', 'dmtuominen@gmail.com', title);

    expect(employee.title).toBe(title);

});



