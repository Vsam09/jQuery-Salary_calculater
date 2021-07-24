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
    let empty = {
        first: $('#firstName').val(''),
        last: $('#lastName').val(''),
        id: $('#number').val(''),
        title: $('#title').val(''),
        salary: $('#salary').val('')
    }
    return empty.val('');
}
//Get employee information after submit
function entry() {
    console.log('Entry works..')
    let table = getEntry();
    entries.push(table);
    console.log('Entry Info', entries)
    renderEntry();
    let totalSalary = calculateTotalPrice();
    $('#totalSalary').text(totalSalary.toFixed(2))
    
 }
 
// Collect employee Information
function getEntry(){
    let table = {
        first: $('#firstName').val(),
        last: $('#lastName').val(),
        id: $('#number').val(),
        title: $('#title').val(),
        salary: Number($('#salary').val())
};
    return table;
}

//CLear table and start clean
function renderEntry() {
    $('#entryTable').empty();

for (let table of entries) {
    $('#entryTable').append(`
    <tr>
        <td>${table.first}</td>
        <td>${table.last}</td>
        <td>${table.id}</td>
        <td>${table.title}</td>
        <td>$${table.salary}</td>
        <td><button id="delBtn1">Delete</button></td>
    </tr>
 `)
 };
}

  //Calculate total price
 function calculateTotalPrice() {

 let totalSalary = 0;
    for (let entry of entries){
    totalSalary += entry.salary;
 };
    return totalSalary;
}