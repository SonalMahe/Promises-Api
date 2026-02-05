//Study Energy Level//-
//Part 1: Creating Your Own Promise --

const checkStudyEnergy = () => {
    return new Promise((resolve, reject) => {
        let energyLevel = Math.random();

        if (energyLevel > 0.5) {
            resolve("Energy level is high! Ready to study.");
        } else {
            reject("Energy level is low. Take a break first.")
        }
    });
}
checkStudyEnergy()
    .then((message) => {
        console.log(message);
    })

    .catch((error) => {
        console.log("Error:" + error);
    });



// part 2.Fetching Data from an API- (using country details API)-
function fetchCountryData() {
    return fetch("https://restcountries.com/v3.1/name/norway") // use Norway country for checkimg on webpage
        .then(response => response.json())
        .then(data => {
            return `
                  🌍 Country: ${data[0].name.official}
                  🏛 Capital: ${data[0].capital[0]}
                  🌐 Region: ${data[0].region}
            `;
        })
        .catch(error => {
            return "Error fetching country data";
        });
}

// fetchCountryData("sweden");
// //  fetchCountryData("italy");
// //  fetchCountryData("france");


//3 .Mix it up both parts-

checkStudyEnergy()
    .then((message) => {
        console.log(message);
        return fetchCountryData(); // Fetch country data 
    })
    .catch((error) => {
        console.log("Error fetching data", error);
    });


