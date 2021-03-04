//1. Assign the data to a descriptive variable
let ufoSightings = data;

//2. Log to check that the data is usable
console.log(ufoSightings);

//3. Get a reference to the table body
tbody = d3.select("tbody");

//4. Create callback function for event handler
function filterTable() {
    let userDate = d3.select("#datetime").property("value");

    if(userDate) {
        filteredRows = ufoSightings.filter(row => row.datetime === userDate);
    }
    else {
        filteredRows = ufoSightings;
    }

    //Deletes row data
    tbody.html("");

    filteredRows.forEach((row_data) => {
        let row = tbody.append("tr");

            Object.values(row_data).forEach((value) => {
                let cell = row.append("td");
                cell.text(value);
            }
            );
    });
}

//5. Establish event handler
button = d3.select("#filter-btn");

button.on("click", filterTable);

//6. First time browser loads the page
btnClick();

