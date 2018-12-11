const jsontocsv = (req, res, next) => {

  req.specialData = {};

  // RECEIVE OBJ
  let data = JSON.parse(req.body.jsonData);

  //INITIALIZE CSV string
  let csv = '';
  let cols = Object.keys(data).filter( key => key !== 'children');
  csv += cols.join(',')
  csv += '\r\n';

  function helper (obj) {
    for (let key in obj) {
      if (key === 'sales') {
        csv += obj[key] + '\r\n';
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

  req.specialData[0] = JSON.stringify(csv);
  next();
};

module.exports = jsontocsv;