const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (request, response) => {
    response.send("Hello From Server. This is Özgür.");
});

app.post('/enroll', (request, response) => {
    console.log('request.body :', request.body);
    response.status(401).send({ message: "Data Received" });
});

app.listen(port, () => {
    console.log("Server running on " + port);
});