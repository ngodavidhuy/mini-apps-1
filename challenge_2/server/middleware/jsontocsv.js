const jsonToCSV = (req, res, next) => {
  let data;

  function convertJSON(data) {
    let csv = '';
    let cols = Object.keys(data).filter( key => key !== 'children');
    csv += cols.join(',')
    csv += '\n';
  
    function helper (obj) {
      for (let key in obj) {
        if (key === 'sales') {
          csv += obj[key] + '\n';
        } else if (key === 'children'){
          for (let child of obj[key]) {
            helper(child);
          }
        } else {
          csv += obj[key] + ',';
        }
      }
    }
  
    helper(data);
    req.csvData = csv;
  }


  if (req.file !== undefined) {
    data = JSON.parse(req.file.buffer.toString());
    convertJSON(data);
  } else if (req.body.jsonData.length) {
    data = JSON.parse(req.body.jsonData);
    convertJSON(data);
  }

  next();
};

module.exports = jsonToCSV;
