function generateCss() {
    return `
    
    header {
        width: 100vw;
        height: 100px;
    }
    
    jumbotron {
        background-color: #335c67;
    }
  
    main-section {
        flex-wrap: wrap;
        margin: 2em auto;
    }
  
    employee-card {
        margin: 1em;
        max-width: 300px;
        width: 100%;
        color: white;
        display: flex;
        border: none;
    }
  
    manager-card {
        background-color: #540b0e;
    }
  
    engineer-card {
        background-color: #9e2a2b;
    }
  
    intern-card {
        background-color: #e09f3e;
    }
  
  card-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
  `}

module.exports = generateCss;