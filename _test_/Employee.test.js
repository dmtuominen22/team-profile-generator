const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Can get a descriptions of Employee', () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe('object');
});