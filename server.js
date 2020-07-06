
const express = require("express");
const app = express();
app.use(cors());
app.get("/", function(request, response){
    response.send("Hello from server");
});
console.log("Server start on port 3000");
app.listen(3000);