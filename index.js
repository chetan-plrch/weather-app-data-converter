const fs = require('fs');
const filePath = './daily_14.json'

fs.readFile(filePath, 'utf8', function(err, data) {
    if(err) {
        console.log('Error: ', err);
        throw err
    } else {
        try {
            const lines = data.split(/\r?\n/);
            const cities = []

            lines.forEach((line) => {
                if(line) {
                    const cityObj = JSON.parse(line)
                    if(cityObj.city.id && cityObj.city.name) {
                        cities.push({ id: cityObj.city.id, name: cityObj.city.name })
                    }
                }
            });

            cities.sort((city1, city2) => {
                return city1.name.toLowerCase().localeCompare(city2.name.toLowerCase())
            });

            fs.writeFile("./daily.json", JSON.stringify(cities), err => { 
                if (err) {
                    throw err;
                } else {
                    console.log("File created");
                }
            })
        } catch(err) {
            console.log('Error: ', err);
        }
    }
}); 
