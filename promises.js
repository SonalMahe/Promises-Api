//Study Energy Level//-
//Part 1: Creating Your Own Promise --

const checkStudyEnergy = () => {
    return new Promise((resolve, reject) => {
        let energyLevel = Math.random();

        if (energyLevel > 0.5) {
            resolve("Energy level is high!.Ready to study.");
        } else {
            reject("Energy level is low.Take a break first.")
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



//Part 2:Part 2: Fetching Data from an API --
