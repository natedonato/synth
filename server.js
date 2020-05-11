const express = require("express");
const app = express();
const http = require("http").createServer(app);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

//serves public folder files for css and other assets
app.use("/public", express.static("public"));



const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log("listening on *:" + PORT);
});