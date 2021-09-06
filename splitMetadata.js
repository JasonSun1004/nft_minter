const fs = require("fs");

var metadata = JSON.parse(fs.readFileSync('./output/_metadata.json'));
// console.log(data);
for( let i = 1; i<= metadata.length; i++){
  fs.writeFileSync(
    `./output/${i}.json`, 
    JSON.stringify(metadata.find((meta) => meta.edition == i))
  );
}