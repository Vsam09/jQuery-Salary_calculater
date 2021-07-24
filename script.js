console.log('Run Script..')

let entries = [];

$(document).ready(onReady)

function onReady() {
    console.log('Run jQuery..')
    $('#addBtn').on('click', entry )
    $('#delBtn1').on('click', deleteEntry )
}

//Delete after entry
function deleteEntry(){
    console.log('Delete Button working..')
}

//Get employee information after submit
function entry() {
    console.log('Entry works..')
    let table = getEntry;
    entries.push(table);
    renderEntry();
    let totalPrice = calculateTotalPrice;
    $('#totalPrice').text(entry.price)
    
 }
 
// Collect employee Information
function getEntry(){
    let table = {
        first: $('#firstNameInput').val(),
        last: $('#lastNameInput').val(),
        id: $('#numberInput').val(),
        title: $('#titleInput').val(),
        salary: $('#salaryInput').val()    
};
    return table;
}

//CLear table and start clean
function renderEntry() {
    $('#entryTable').empty();

for (let entry of entries) {
    $('#entryTable').append(`
    <tr>
        <td>${firstName.first}</td>
        <td>${lastName.last}</td>
        <td>${number.id}</td>
        <td>${title.title}</td>
        <td>${salary.salary}</td>
    </tr>
 `)
 }
}

  //Calculate total price
 function calculateTotalPrice() {

 let totalPrice = 0;
    for (let entry of entries){
    totalPrice += entry.price;
 }
    return totalPrice;
}