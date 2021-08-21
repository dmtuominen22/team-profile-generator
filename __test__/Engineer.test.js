const Engineer = require('../lib/Engineer')

 test('can get GitHub username via constructor', () => {
    const github = "GitHubUser";
    const employee = New Engineer('Lisa', 'E2345', 'testing@test.com', github, 300,title);

    expect(employee.github).tobe(github);
 });