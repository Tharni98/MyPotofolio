/* Customer Form */

let btnAdd = $("#btnSaveCustomer");
let tblCustomers = $("#tblCustomers");
let btnUpdate = $("#btnUpdateCustomer");
let btnDelete = $("#btnDeleteCustomer");
let btnClear = $("#btnClearAll");



//Save Customer

let CustomerList=[];
let customerIndex;

$("#btnCustomerSave").click(function (){
    let cusId = $("#CustInputID").val();
    let cusName = $("#CustName").val();
    let cusAddress = $("#CustAddress").val();
    let cusNumber = $("#CustNum").val();

    //console.log($("CustInputID").val()+" ")

    let tBody=$("#tblCustomer");

    let tr = $('<tr> <td>'+cusId+'</td>  <td>'+cusName+'</td>  <td>'+cusAddress+'</td> <td>'+cusNumber+'</td> </tr>');

    CustomerList.push({id:cusId,name:cusName,address:cusAddress,contact:cusNumber})
    // CustomerList.push()
    //set the row to the table body
    tBody.append(tr);

    clearCustomerFields();
    //    load item code's into place order form
    let custListId = document.getElementById("custListId");

    let option2 = document.createElement("option");

    option2.text=cusId ;
    option2.value=cusId ;
    custListId.append(option2);

});

let selectedCustomerRow;

//load Customer
$("#tblCustomer").click(function (event){
    selectedCustomerRow = event.target.closest('tr');
    $('#CustInputID').val(selectedCustomerRow.cells[0].textContent);
    $('#CustName').val(selectedCustomerRow.cells[1].textContent);
    $('#CustAddress').val(selectedCustomerRow.cells[2].textContent);
    $('#CustNum').val(selectedCustomerRow.cells[3].textContent);

    customerIndex = CustomerList.findIndex(customerList => customerList.id === selectedCustomerRow.cells[0].textContent);


});

//Update Customer
$("#btnUpdate").click(function(){
    let cusId = $("#CustInputID").val();
    let cusName = $("#CustName").val();
    let cusAddress = $("#CustAddress").val();
    let cusContact = $("#CustNum").val();

    selectedCustomerRow.cells[0].textContent=cusId;
    selectedCustomerRow.cells[1].textContent=cusName;
    selectedCustomerRow.cells[2].textContent=cusAddress;
    selectedCustomerRow.cells[3].textContent=cusContact;

    clearCustomerFields();


    //updating the selected customer from the list
    CustomerList[customerIndex].id=cusId;
    CustomerList[customerIndex].name=cusName;
    CustomerList[customerIndex].address=cusAddress;
    CustomerList[customerIndex].contact=cusContact;

    console.log(CustomerList);

    btnUpdate.prop('disabled',true);
    btnDelete.prop('disabled',true);
    btnAdd.prop('disabled',false);
});

$('#CustomerTbl').click(function (event){
    console.log("ciear");


});

// Clear Customer
function clearCustomerFields() {
    $('#CustInputID').val("");
    $('#CustName').val("");
    $('#CustAddress').val("");
    $('#CustNum').val("");
}

$("#btnClear").click(function (){
    clearCustomerFields();
});

//Customer Delete
$("#btnDelete").click(function (){
    selectedCustomerRow.remove();

    //removing the selected customer from the list
    CustomerList.splice(customerIndex,1);
    console.log(CustomerList);

    clearCustomerFields();


});