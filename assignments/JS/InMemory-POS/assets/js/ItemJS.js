/* Item Form */


// let btnAddItem = $("#btnSaveItem");
// let tblItem = $("#tblItem");
// let btnUpdate = $("#btnUpdateItem");
// let btnDelete = $("#btnDeleteItem");
// let btnClear = $("#btnClearAll");




//Save Customer

let ItemList=[];
let ItemIndex;

$("#btnItemSave").click(function (){
    let itemId = $('#Code').val();
    let itemDec = $('#ItemDec').val();
    let itemUnitPrice = $('#UnitPiz').val();
    let itemQty = $('#itemQty').val();


    let tBody=$('#ItemTbl');

    let tr = $('<tr> <td>'+itemId+'</td>  <td>'+itemDec+'</td>  <td>'+itemUnitPrice+'</td> <td>'+itemQty+'</td> </tr>');

    ItemList.push({id:itemId,description:itemDec,price:itemUnitPrice,qty:itemQty});
    console.log(itemId,itemDec,itemUnitPrice,itemQty);
    // CustomerList.push()
    //set the row to the table body
    tBody.append(tr);

    //    load item code's into place order form
    let itemIdList = document.getElementById("itemIdList");

    let option2 = document.createElement("option");

    option2.text=itemId;
    option2.value=itemId;
    itemIdList.append(option2);
    // clearItemFields();

});

let selectedItemRow;
//load Customer
$("#ItemTbl").click(function (event){
    selectedItemRow = event.target.closest('tr');
    $('#Code').val(selectedItemRow.cells[0].textContent);
    $('#ItemDec').val(selectedItemRow.cells[1].textContent);
    $('#UnitPiz').val(selectedItemRow.cells[2].textContent);
    $('#itemQty').val(selectedItemRow.cells[3].textContent);

    ItemIndex = ItemList.findIndex( ItemList=> ItemList.id === selectedItemRow.cells[0].textContent);


});

//Update Customer
$("#btnItemUpdate").click(function(){
    let itemId = $("#Code").val();
    let itemDec = $("#ItemDec").val();
    let itemUnitPrice = $("#UnitPiz").val();
    let itemQty = $("#itemQty").val();

    selectedItemRow.cells[0].textContent=itemId;
    selectedItemRow.cells[1].textContent=itemDec;
    selectedItemRow.cells[2].textContent=itemUnitPrice;
    selectedItemRow.cells[3].textContent=itemQty;

    clearItemFields();


    //updating the selected customer from the list
    ItemList[ItemIndex].id= itemId;
    ItemList[ItemIndex].name=itemDec;
    ItemList[ItemIndex].price=itemUnitPrice;
    ItemList[ItemIndex].qty=itemQty;

    console.log(ItemList);

    btnUpdate.prop('disabled',true);
    btnDelete.prop('disabled',true);
    btnAdd.prop('disabled',false);
});

$('#ItemTbl').click(function (event){
    console.log("ciear");


});

// Clear Customer
function clearItemFields() {
    $('#Code').val("");
    $('#ItemDec').val("");
    $('#UnitPiz').val("");
    $('#itemQty').val("");
}

$("#btnItemClear").click(function (){
    clearItemFields();
});

//Customer Delete
$("#btnItemDelete").click(function (){
    selectedItemRow.remove();

    //removing the selected customer from the list
    ItemList.splice(ItemIndex,1);
    console.log(ItemList);

    clearItemFields();


});