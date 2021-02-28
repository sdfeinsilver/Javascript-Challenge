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
}

// // Select the button
// let button = d3.select("#filter-btn");

// // Select the form
// //let form = d3.select("#ufo-table");

// //Create event handlers
// button.on("click", runEnter);
// //form.on("submit", runEnter);

// // Complete the event handler function for the form
// function runEnter(event) {

//     //Prevent the page from refreshing
//     event.preventDefault();

//     //Select the inpout element and get the raw HTMLnode
//     let inputElement = d3.select("datetime");

//     //Inspect the data in the console
//     console.log(inputElement);
// }




