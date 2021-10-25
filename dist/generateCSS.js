function generateCss() {
  return `
    
    header {
        width: 100vw;
        height: 100px;
    }
    
     
    main-section {
        flex-wrap: wrap;
        margin: 2em auto;
    }
  
    employee-card {
        margin: 1em;
        max-width: 280px;
        width: 90%;
        min-height: 22rem;
        background-color: #007bff;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7);
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
  `;
}

module.exports = generateCss;
