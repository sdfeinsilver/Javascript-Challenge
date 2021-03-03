// Assign the data from 'data.js' to a descriptive value
const tableData = data;

// Log to check that the data is usable
console.log(tableData);

// Get a reference to the table body
let tbody = d3.select("tbody");

// Create function:
function clickButton() {
    let myDate = d3.select("#datetime").property("value");
    console.log(myDate);

    if(myDate) {
        filteredRows = tableData.filter(row => row.datetime === myDate);
    }
    else {
        filteredRows = tableData;
    }


    // Wipe out any row data
    tbody.html("");


    //forEach Statement
    filteredRows.forEach((row_data) => {
    let row = tbody.append("tr");

        Object.values(row_data).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
        }
        );
    });
}

//Button click
d3.selectAll("#filter-btn").on("click", clickButton);

// First time browser loads the page
btnClick();

