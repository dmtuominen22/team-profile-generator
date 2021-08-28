
// TODO: Create a function to write html file
function writeToFile(generatehtml) {
    var htmlData = `<!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="../template/style.css">
<title>Team Profile</title>

        

    </head>
    <body>
    <header>
    <h1>Team Profile</h1>
    </header>
  
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">card.getRole<br>card.getName</div>
    <div class="card mx-auto" style="width: 18rem">
    <h5 class="card-header">Denise Tuominen /><br />Engineer</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID</li>
        <li class="list-group-item">email</li>
        <li class="list-group-item">GitHub</li>
    </ul>
</div>
  </div>
    
    `
    for (const card of employees) {
        htmlData += "<div><h2>" + card.getRole() + "<br>" + card.getName() + "</h2>";
        htmlData += "<p>ID: " + card.getId() + "</p>";
        htmlData += "<p>Email: <a href='mailto:" + card.getEmail() + "'>" + card.getEmail() + "</a></p>";
        switch (card.getRole()) {
            case "Engineer":
                htmlData += "<p>GitHub: " + card.getGithub() + "</p>";
                break;
            case "Intern":
                htmlData += "<p>School: " + card.getSchool() + "</p>";
                break;
            case "Manager":
                htmlData += "<p>Office Number: " + card.getOfficeNumber() + "</p>";
                break;
        }
        htmlData += "</div>";
    }

    htmlData += `</body></html>`;

    fs.writeFile("../dist/index.html", htmlData, (err) => {
        if (err) throw err;

        console.log("Employee Cards Finished!");
    });
}