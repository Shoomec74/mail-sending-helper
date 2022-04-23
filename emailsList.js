const fs = require("fs");
let fileContent = fs.readFileSync("./mails.txt", "utf8");
const emailsList = Array.from(fileContent.split(', '));
module.exports = emailsList;