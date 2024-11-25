const request = require('request');
const fs = require('fs');
request(process.argv[2], function (error, response, body) {
    fs.writeFile(process.argv[3], body, { encoding: 'utf8' }, () => {
        return
    });
});