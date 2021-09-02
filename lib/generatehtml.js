// TODO: Create a function to write html file
exports.writeToFile = function (employeeArray) {

    var htmlData = `<!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="../temp/style.css">

        <title>Employee Contact Cards</title>
    </head>
    <body>
    <header>
    <h1>Team Profile</h1>
    </header>  `;

    for (const card of employeeArray) {
        htmlData += `<div class="box" style="width: 18rem">
        
    <h5 class="card-header">${card.getName()}<br /><br />${card.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${card.getId()}</li>
        <li class="list-group-item">Email: <a href = "mailto:${card.getEmail()}">${card.getEmail()}</a></li>`;

        switch (card.getRole()) {
            case "Engineer":
                htmlData += `<li class="list-group-item">GitHub: <a href = https://github.com/${card.github}/>${card.getGithub()}</a></li>`;
                break;
            case "Intern":
                htmlData += `<li class="list-group-item">School: ${card.getSchool()}</li>`;
                break;
            case "Manager":
                htmlData += `<li class="list-group-item">Office Number: ${card.getOfficeNumber()}</li>`;
                break;
        }
        htmlData += "</ul></div>";
    }

    htmlData += `</body></html>`;

    return htmlData;
}
