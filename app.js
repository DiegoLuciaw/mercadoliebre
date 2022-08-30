const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo en puerto 3000");
  });

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

