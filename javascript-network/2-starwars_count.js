const request = require('request');
request(process.argv[2], function (error, response, body) {
    const responseBody = JSON.parse(body).results;
    let count = 0;
    responseBody.forEach(element => {
        element.characters.forEach(character => {
            if (character.includes("18")) {
                count++;
            }
        });
    });
    console.log(count); 
});