// create profile of team members
const createProfile = team => {

const createManager = manager => {
  return `
  <div class="card employee-card manager-card">
            <div class="card-header text-center">
                <h2 class="card-title">${manager.getName()}</h2>
                <h4 class="card-title">Title: ${manager.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };


 // Create Engineer Profile
 const createEngineer = engineer => {
    return `

 <div class="card employee-card manager-card">
            <div class="card-header text-center">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h4 class="card-title">Title: ${engineer.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}"target="_blank">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

 
 // Create Intern Profile
 const createIntern = intern => {
    return `

 <div class="card employee-card manager-card">
 <div class="card-header text-center">
     <h2 class="card-title">${intern.getName()}</h2>
     <h4 class="card-title">Title: ${intern.getRole()}</h4>
 </div>
 <div class="card-body bg-light">
     <ul class="list-group text-dark">
         <li class="list-group-item">ID: ${intern.getId()}</li>
         <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
         <li class="list-group-item">School: ${intern.getSchool()}</li>
     </ul>
 </div>
</div>
`;
};

//generateHTML: returns the html that index.js will eventually use to inject into the DOM

const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");

}

//export function to generate entire page

module.exports = team => {

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="styles.css"/>
        <title>Team Profile Generator</title>
    </head>
    <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron text-white mb-3">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="main-section col-12 d-flex justify-content-center">
            ${createProfile(team)}
            </div>
        </div>
    </div>    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
    </body>
    </html>`;
};