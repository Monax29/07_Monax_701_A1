const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello from script server!");
});

server.listen(4000, () => {
    console.log("✅ Server running at http://localhost:4000");
});
