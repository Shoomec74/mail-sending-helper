const fs = require("fs");
let HTML = fs.readFileSync("./templates/templates/marketing.html", 'utf-8');
module.exports = HTML;