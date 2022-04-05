const express = require("express");

const app = express();
require("./conn");

const user = require("./user");
app.use(express.json());
app.use("/api/user", user);
const cors = require("cors");
app.use(cors());

app.post("/", (req, res) => {
  const { name, number } = req.body;
  if (!name || !number) {
    return res.status(400).json({
      error: "name or number missing",
    });
  }
  user.findOne({ name: name }, (err, data) => {
    if (err) {
      return res.status(401).json({
        error: "name or number missing",
      });
    } else {
      const newUser = new user({
        name,
        number,
      });
      newUser.save().then(() => {
        res.status(201).json({
          message: "user added successfully",
        });
      });
    }
  });
});

app.get("/", (req, res) => {
  user.find((error, data) => {
    if (error) {
      return error;
    } else {
      return res.json(data);
    }
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
