
const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors());
app.get("/api", function(request, response){
    response.send("Hello from server");
});
console.log("Server start on port 3001");
app.listen(3001);