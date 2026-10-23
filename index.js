
const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>DevOps CI/CD Project</title>
        </head>
        <body>
            <h1>Hello from Node.js Demo App!</h1>
            <p>GitHub Actions CI/CD Pipeline is working.</p>
            <p>Docker image deployment project.</p>
        </body>
        </html>
    `);
});

if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = server;
