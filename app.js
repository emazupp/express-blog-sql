// CONFIG EXPRESS
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// ROUTES
const postsRouter = require("./routers/posts");
app.use("/posts", postsRouter);

// HOMEPAGE
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// ERRORS HANDLER
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");

app.use(errorsHandler);
app.use(notFound);

// LISTENING
app.listen(port, () => {
  console.log(`App Express listening on port ${port}`);
});
