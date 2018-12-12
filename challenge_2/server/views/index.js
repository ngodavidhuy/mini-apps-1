let testingInjection = (results) => {
  return `<!DOCTYPE html>

  <html lang="en"> 
    <head>
      <meta charset="utf-8">
      <meta name="author" content="WAVYDAVY">
      <title>CSV Report Generator</title>
      <link href= "./main.css" rel="stylesheet">
    </head>
  
    <body>
  
      <h1>CSV Report Generator</h1>
  
  
      <div class="main-container">
  
          <div class="table-container">
            <form class="submissionForm" id="main-form" method="POST" action="/">
                  <div><textarea  id="json-input" rows="1" cols="50" wrap ="physical" name="jsonData" placeholder="Paste in valid JSON and SUBMIT!~"></textarea></div>
                  <div><button id="submissionButton">JSON TO CSV</button></div>
              </form>
          </div>
  
          <div id="csv-output">
              <pre>${results}</pre>
          </div>
  
      </div>
      
      
      <script src="./app.js"></script>
    </body>
  </html>`;
}

module.exports = testingInjection;