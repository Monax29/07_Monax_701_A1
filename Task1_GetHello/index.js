const express = require('express');
const app = express();
const port = 3000;

// Serve static files like index.html
app.use(express.static('public'));

// Route - /gethello
app.get('/gethello', (req, res) => {
    res.send('Hello NodeJS!!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
