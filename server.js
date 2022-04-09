const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(_dirname + "/dist/angular-10-client"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(_dirname + "/dist/angular-10-client/index.html"));
});

app.listen(process.env.PORT);
