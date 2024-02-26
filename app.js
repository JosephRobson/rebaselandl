import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users/:userId", (req, res) => {
  const { params: { userId } = {} } = req;

  if (userId) {
    res.send(userId);
  } else {
    res.status(400).send();
  }
});

const port = 1234;
app.listen(port);

console.log(`listening on port ${port}`);