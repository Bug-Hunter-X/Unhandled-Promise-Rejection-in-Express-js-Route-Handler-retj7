const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Missing res.send() or similar to send a response
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});