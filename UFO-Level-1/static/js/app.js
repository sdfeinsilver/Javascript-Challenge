//Scope: Javascript code that allows the user to enter a date in website, and output will be UFO data that matches the date

//1. Assign the data to a descriptive variable
let ufoSightings = data

//2. Select the button
let button = d3.select("#filter-btn");

//3. Get a handle on the table body
let tbody = d3.select("tbody");

//4. Create event handler
button.on("click", filterTable);

//5. Complete event handler function for click of button
function filterTable(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    //Select the user date input and get the raw HTML code
    let userDate = d3.select("#datetime").property("value");

    //if statement to filter out ufoSightings table based on userDate
    if (userDate = ufoSightings.datetime) {
        let row = tbody.append("tr");
        let cell = row.append("td");
        Object.values(ufoSightings).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
        }
    