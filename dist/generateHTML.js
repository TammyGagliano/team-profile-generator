/*
  generateHTML: return html markup in the form of a string
  generateCSS: include css rules in the form of a string that we will inject in this file
*/

/*
  renderCards: given a data(can be an engineer, intern, manager, employee), generate HTML that consist of 
  a card
*/
function renderCards(data) {
    console.log('data: ', data);
    return `<div class="card">
    <div class="card-body">
        <h4 class="card-title">${data.name}</h4>
        <h6 class="text-muted card-sub-title mb-2">${data.role}</h6>
        <p>${data.id}</p>
        <p>${data.email}</p>
        <p>${data.officenumber}</p>
    </div>
    </div>`;
}

/*
 generateHTML: returns the html that index.js will eventually use to inject into the DOM
*/
function generateHtml(data) {
    const cards = [];
    for (let i=0; i < data.length; i++) {
        const cardSection = renderCards(data[i]);
        cards.push(cardSection);
    }
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="styles.css"/>
    <title>Team Profile Generator</title>
</head>
<body>
    <header class="d-lg-flex justify-content-lg-center align-items-lg-center">
        <h2>My Team</h2>
    </header>
    <div class="container-fluid d-flex flex-row justify-content-center flex-wrap">
        ${cards.join('\n')}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
</body>
</html>`;
}

module.exports = generateHtml;