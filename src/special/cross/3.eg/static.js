const http = require("http");
const fs = require("fs");
const app = http.createServer();

app.on("request", (req, res) => {
  if (req.url == "/favicon.ico") {
    return;
  }
  fs.readFile(__dirname + req.url, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data.toString());
    }
    res.end();
  });
});

app.listen("3000", () => {
  console.log("连接到3000端口");
});
