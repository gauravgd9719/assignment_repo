const express = require("express");
const route = require("./routes/route");

const app = express();
app.use(express.json());

app.use("/", route);

app.listen(3000, () => {
  console.log("Express Running On 3000 PORT NO");
});
