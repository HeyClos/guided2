// uses the server and listens for connections
const server = require("./api/server.js");
const port = 8000;
server.listen(port, () => console.log(`api on port ${port}`));