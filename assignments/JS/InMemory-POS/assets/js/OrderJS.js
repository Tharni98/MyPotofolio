
$('#custListId').click(function (){
    console.log("ebuwa");
    let selectedId = $('#custListId').val();
    console.log(selectedId);

    let customerIndex = CustomerList.findIndex(CustomerList => CustomerList.id === selectedId);
    console.log("hiii");

    console.log(CustomerList["a"]);
    $('#cusNamePO').val(CustomerList[customerIndex].name);
});


$('#itemIdList').click(function (){
    console.log("ebun na");
    let selectedCode = $("#itemIdList").val();
    console.log(selectedCode);
    /*console.log("hri");*/

    let ItemIndex = ItemList.findIndex(ItemList => ItemList.id === selectedCode);
    console.log("hiii naaa");
    console.log(ItemList[ItemIndex]);

    $('#itemDesPO').val(ItemList[ItemIndex].description);
    $('#itemPricePO').val(ItemList[ItemIndex].price);
    $('#Qty').val(ItemList[ItemIndex].qty);
});


let amountOfTotal=0;
let OrderList=[];
let orderIndex;

$("#addToCard").click(function (){
   let itemId = $('#Code').val();
   let itemDec = $('#ItemDec').val();
   let unitPrice=$('#itemPricePO').val();
   let qty=$('#Qty').val();
   let total=unitPrice*qty

    //console.log($("CustInputID").val()+" ")

    let tBody=$("#OrderTbl");

    let tr = $('<tr> <td>'+itemId+'</td> <td>'+itemDec+'</td> <td>'+ unitPrice+'</td> <td>'+qty+'</td> <td>'+total+'</td></tr>');

    OrderList.push({id:itemId,name:itemDec,price:unitPrice,number:qty})
    // CustomerList.push()
    //set the row to the table body
    tBody.append(tr);


//set total for bill
    amountOfTotal =total+amountOfTotal;
    console.log("AIFSA",amountOfTotal);
    $('#totalPlaceOrder').val(amountOfTotal);

});

let selectedOrderRow;
//load Customer
$("#tblCustomer").click(function (event){
    selectedCustomerRow = event.target.closest('tr');
    $('#Code').val(selectedOrderRow.cells[0].textContent);
    $('#ItemDec').val(selectedOrderRow.cells[1].textContent);
    $('#itemPricePO').val(selectedOrderRow.cells[2].textContent);
    $('#Qty').val(selectedOrderRow.cells[3].textContent);
    $('#Total').val(selectedOrderRow.cells[4].textContent);

    orderIndex = OrderList.findIndex(OrderList => OrderList.id === selectedCustomerRow.cells[0].textContent);


});

//add Order Total




