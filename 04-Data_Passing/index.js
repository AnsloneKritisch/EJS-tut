const express = require('express')
const ejs = require('ejs');
const app = express()
const port = 3000

let bowl = ["Apples", "Oranges", "Pears"];

app.get("/", (req, res) => {
    res.render("index.ejs", { fruits: bowl });
})

app.listen(port, () => {
    console.log(`Example app listening on localhost:${port}`)
})