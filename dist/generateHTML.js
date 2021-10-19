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

}
 // Create Engineer Profile

 
 // Create Intern Profile

 //generateHTML: returns the html that index.js will eventually use to inject into the DOM

function generateHtml(data) {
  const cards = [];
  for (let i = 0; i < data.length; i++) {
    const cardSection = renderCards(data[i]);
    cards.push(cardSection);
  }
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
    }

module.exports = generateHtml;
