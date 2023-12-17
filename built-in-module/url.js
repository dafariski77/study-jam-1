const url = require("url");

const web =
  "https://www.linkedin.com/in/rafiadipramana?skill=all-role&ganteng=true";

const urlObj = url.parse(web, true);

console.log(urlObj.hostname)
console.log(urlObj.pathname)
console.log(urlObj.search)

const urlQuery = urlObj.query;

console.log(urlQuery.skill)
console.log(urlQuery.ganteng)
