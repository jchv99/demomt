const express = require("express");
const path = require('path');
const cors = require("cors");
const app = express();

const routes = require("./routes/routes");

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use('/', routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`)
});

