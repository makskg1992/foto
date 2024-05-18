const fs = require('fs');
const images = fs.readdirSync('./img/2');
fs.writeFile('jpg2.json',JSON.stringify(images),'utf8', function(err){
    console.log(err)
})


