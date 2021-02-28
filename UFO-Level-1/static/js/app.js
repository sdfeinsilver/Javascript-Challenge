// Assign the data from 'data.js' to a descriptive value
const tableData = data;

// Select the button
let button = d3.select("#filter-btn");

// Select the form
//let form = d3.select("#ufo-table");

//Create event handlers
button.on("click", runEnter);
//form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter(event) {

    //Prevent the page from refreshing
    event.preventDefault();

    //Select hte inpout element and get the raw HTMLnode
    let inputElement = d3.select("")
}





function btnClick() {
    const myDate = d3.select("#datetime").property("value");
}.