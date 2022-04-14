const express = require("express");
const app = express();
const mainRouter = require("./routes");
const config = require("./config");
app.use(express.json())
app.use(mainRouter);
app.listen(config.port, config.host, () =>
    console.log(`Server listens http://${config.host}:${config.port}`)
)
