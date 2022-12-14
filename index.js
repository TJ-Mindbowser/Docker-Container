const express = require('express')
const app = express()
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(8080, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port 8080");
})

/**
 * 1) DockerFile -> Configuration for our docker container
 * 2) Image( Blueprint )
 * 3) Image -> Container 8080:1000
 */