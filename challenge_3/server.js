const express = require('express');
const app = express();

app.use(express.static('./public'));

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING IN PORT ${PORT} BECAUSE OF THE INTERNET`);
});

