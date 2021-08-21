const Intern = require ('../lib/Intern');

test('can get school via constructor', () => {
    const school = "school";
    const employee = new Intern('Lisa', 'E2345', 'testing@test.com', school, 'dmtuominen22', 300, 'Engineer');

    expect(employee.school).toBe(school);
 });

test('can get title via constructor', () => {
    const title = 'Intern';
    const intern = new Intern('Lisa', 'E2345', 'testing@test.com', ' Berkley','dmtuominen22', 500, title);

    expect(intern.title).toBe(title);

 });