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
          <form class="submissionForm" id="main-form" method="POST" action="/" enctype="multipart/form-data">
                <input type="file" name="jsonFile">
                <textarea  id="json-input" rows="1" cols="50" wrap ="physical" name="jsonData" placeholder="Option to copy and paste into textarea here OR import json file above!!!"></textarea>
                <button id="submissionButton">JSON TO CSV</button>
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