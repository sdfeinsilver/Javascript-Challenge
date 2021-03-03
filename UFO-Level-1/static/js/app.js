//Scope: Javascript code that allows the user to enter a date in website, and output will be UFO data that matches the date

//1. Check that you have access to data in javascript file
console.log(data);
    //Check: Data successfully logged in console!

//2. Get a handle on the table body
let tbody = d3.select("tbody");

//3. use forEach loop to loop through data and print each object to console
data.forEach(function (ufoSighting) {
    console.log(ufoSighting);
});
    //Check: Individual objects were successfully logged in console



