const Engineer = require ('../lib/Engineer');

 test('can get GitHub username via constructor', () => {
    const gitHubValue = "GitHubUser";
    const employee = new Engineer('Lisa', 'E2345', 'testing@test.com', gitHubValue, 300, 'Engineer');

    expect(employee.github).toBe(gitHubValue);
 });

 test('can get title via constructor', () => {
    const title = 'Engineer';
    const engineer = new Engineer('Lisa', 'E2345', 'testing@test.com', 'dmtuominen22', 500, title);

    expect(engineer.title).toBe(title);

});