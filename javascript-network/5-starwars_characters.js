const request = require('request');
request(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`, function (error, response, body) {
    const movieData = JSON.parse(body);
    const characters = movieData.characters;
    characters.forEach(character => {
        request(character, function (error, response, body) {
                const characterData = JSON.parse(body);
                console.log(characterData.name);
        });
    })
});