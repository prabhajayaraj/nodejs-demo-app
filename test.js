
const test = require("node:test");
const assert = require("node:assert");
const server = require("./index");

test("application responds with a welcome message", async () => {
    await new Promise((resolve) => {
        server.listen(0, "127.0.0.1", resolve);
    });

    try {
        const port = server.address().port;
        const response = await fetch(`http://127.0.0.1:${port}`);

        assert.strictEqual(response.status, 200);

        const body = await response.text();
        assert.match(body, /Hello from Node.js Demo App!/);
    } finally {
        await new Promise((resolve, reject) => {
            server.close((error) => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
});
