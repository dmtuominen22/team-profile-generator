const Engineer = require ('../lib/Engineer');

 test('can set GitHub account via constructor', () => {
    const gitHubValue = "GitHubUser";
    const employee = new Engineer('Lisa', 'E2345', 'testing@test.com', gitHubValue, 'Engineer');

    expect(employee.github).toBe(gitHubValue);
 });

 test('can get title via constructor', () => {
    const title = 'Engineer';
    const engineer = new Engineer('Lisa', 'E2345', 'testing@test.com', 'dmtuominen22', title);

    expect(engineer.title).toBe(title);

});

