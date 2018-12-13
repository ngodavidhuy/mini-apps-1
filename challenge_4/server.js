const express = require('express');
const app = express();

app.use(express.static('client/dist'))











let PORT = 3005;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING TO PORT ${PORT} BECAUSE OF THE INTERNET`)
});

