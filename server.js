const http = require("http");

const todos = [
  { id: 1, text: "Uno" },
  { id: 2, text: "Dos" },
  { id: 3, text: "tres" },
];

const server = http.createServer((req, res) => {
  // ALWAYS HAVE CONTENT TYPE IN HEADER
  // res.statusCode = 404;
  // res.setHeader("Content-Type", "application/json");
  // res.setHeader("X-Powered-By", "Node.js");
  res.writeHead(400, {
    "Content-Type": "application/json",
    "X-Powered-By": "Node.js",
  });
  res.end(
    JSON.stringify({
      success: false,
      error: "Wheres yo email brah",
      data: null,
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
