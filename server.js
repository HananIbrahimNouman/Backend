const express = require("express");
const app = express();
const cors= require("cors")
const port = 5000;

app.use(express.json());
app.use(cors());

const students = [
    { name: "Hiji", age: 25, favFood: "Mansaf" },
    { name: "Oudeh", age: 23, favFood: "Kabesa" },
    { name: "Othman", age: 29, favFood: "Bryani" },
  ];
  
  // try this endpoint http://localhost:3000/students on postman (GET Request)
  app.get("/students", (req, res) => {
    res.status(200);
    res.json(students);
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });