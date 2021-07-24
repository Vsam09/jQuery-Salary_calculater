console.log('Run Script..')

let entries = [];

$(document).ready(onReady)

function onReady() {
    console.log('Run jQuery..')
    $('#addBtn').on('click', entry )
    ${'#.deleteBtn'}.on('click',)
}

function entry() {
    console.log('Entry works..')

let table = {
    first: $('#firstName').val(),
    last: $('#lastName').val(),
    id: $('#idNumber').val(),
    title: $('#title').val(),
    salary: $('#salary').val()
 };
 entries.push(entry);

 $('#entryTable').append(`
    <tr>
        <td>${firstName.name}</td>
        <td>${lastName.name}</td>
        <td>${idNumber.num}</td>
        <td>${title.name}</td>
        <td>${salary.num}</td>
    
    </tr>
 
 `)
 //Calculate total price
 let totalPrice = 0;
 for (let entry of entries)
 totalPrice += entry.price

 //set total price
 $('#totalPrice').text(entry.price)
}
