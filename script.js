console.log('Run JS..')

let entries = [];

$(document).ready(onReady)

function onReady() {
    console.log('Run jQuery..')
    $('#addBtn').on('click', entry);
    $(document).on('click', ".delBtn1", deleteEntry );
}

//Delete entry
function deleteEntry(){
    console.log('Delete Button working..')
    $(this).empty();
}
//End Delete entry

//Get employee information after submit
function entry() {
    console.log('Entry works..')
let employee = getEntry();
    entries.push(employee);
    console.log('Entry Info', entries)
    renderEntry();
let totalSalary = calculateTotalPrice();
    $('#totalSalary').text(totalSalary.toFixed(2))
 }
//End Get employee Information
 
// Collect employee Information
function getEntry(){
let employee = {
    first: $('#firstName').val(),
    last: $('#lastName').val(),
    id: $('#number').val(),
    title: $('#title').val(),
    salary: Number($('#salary').val())
};
    return employee;
}
//End Collecting employee Information
/*function emptyEntryInputs() {
    $('#firstName').val(''),
    $('#lastName').val(''),
    $('#number').val(''),
    $('#title').val(''),
    $('#salary').val('')
}*/
//CLear table and start clean
function renderEntry() {
    $('#entryTable').empty();

for (let employee of entries) {
    $('#entryTable').append(`
    <tr>
        <td>${employee.first}</td>
        <td>${employee.last}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>$${employee.salary}</td>
        <td><button class="delBtn1">Delete</button></td>
    </tr>
 `)
 };
}
//End Rendering

//Calculate total price
 function calculateTotalPrice() {
    console.log('Calculator is working..')
 let totalSalary = 0;
    for (let entry of entries){
    totalSalary += entry.salary;
 };
    return totalSalary;
}
//End Calculate total price