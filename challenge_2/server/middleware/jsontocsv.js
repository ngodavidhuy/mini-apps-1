const jsontocsv = (req, res, next) => {

  req.specialData = {};

  // RECEIVE OBJ
  let data = JSON.parse(req.body.jsonData);

  //INITIALIZE CSV string and build it!
  let csv = '';
  let cols = Object.keys(data).filter( key => key !== 'children');
  csv += cols.join(',')
  csv += '\n';

  function helper (obj) {
    for (let key in obj) {
      if (key === 'sales') {
        csv += obj[key] + '\n';
      } else if (key === 'children'){
        let childrenArr = obj[key];
        for (let child of childrenArr) {
          helper(child);
        }
      } else {
        csv += obj[key] + ',';
      }
      
    }
  }

  helper(data);
  console.log(req.csvData);
  req.csvData = JSON.stringify(csv);
  next();
};

module.exports = jsontocsv;