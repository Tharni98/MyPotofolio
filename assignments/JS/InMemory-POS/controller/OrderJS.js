
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

   //  var Chek =false;
   //
   //
   // let itemId = $('#Code').val();
   // let itemDec = $('#ItemDec').val();
   // let unitPrice=$('#itemPricePO').val();
   // let qty=$('#Qty').val();
   // let total=unitPrice*qty
   //
   //  for (let i = 0; i < OrderList.length; i++){
   //      if (OrderList[i].id==itemId){
   //
   //      }
   //  }

    //console.log($("CustInputID").val()+" ")

    let tBody=$("#OrderTbl");
    let itemId = $('#Code').val();
    let itemDec = $('#ItemDec').val();
    let unitPrice=$('#itemPricePO').val();
    let qty=$('#Qty').val();
    let total=unitPrice*qty

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

//clear btn
function clearOrderFields() {
    $('#InputOID').val("");
    $('#InputDate').val("");
    $('#custListId').val("");
    $('#cusNamePO').val("");
    $('#itemIdList').val("");
    $('#itemDesPO').val("");
    $('#itemPricePO').val("");
    $('#itemQtyHandPO').val("");
    $('#Qty').val("");
    $('#totalPlaceOrder').val("");
    $('#discountPlaceOrder').val("");
    $('#subTotalPlaceOrder').val("");

}

$("#btnOrderClear").click(function(){
    clearOrderFields();
});

//add Order Total

// Discount
//sub total calculation part
$('#subTotalPlaceOrder').click(function (){
    let discount = $('#discountPlaceOrder').val();
    console.log("hate this");
    let subTotal = amountOfTotal -discount;
    $('#subTotalPlaceOrder').val(subTotal);

});

//btn purchase action
let finalOrderList = [];
$('#btnPurchaseFinalOrder').click(function (){

    let finalOrderId =  $('#InputOID').val();
    let finalOrderDate = $('#InputDate').val();
    let finalCustomerId = $('#custListId').val();
    let finalItemCode = $('#itemIdList').val();
    let finalQuantity = $('#Qty').val();
    let finalDiscount = $('#discountPlaceOrder').val();
    let finalTotal =  $('#subTotalPlaceOrder').val();

    let tBody=$("#tblFinalOrder");

    let tr = $('<tr> <td>'+finalOrderId+'</td>  <td>'+finalOrderDate+'</td>  <td>'+finalCustomerId+'</td> <td>'+finalItemCode+'</td> <td>'+finalQuantity+'</td> <td>'+finalDiscount+'</td>  <td>'+finalTotal+'</td> </tr>');

    tBody.append(tr);

    finalOrderList.push({oid:finalOrderId , date:finalOrderDate, id:finalCustomerId , code :finalItemCode,  qty : finalQuantity , discount :finalDiscount , subtotal:finalTotal})

    /* console.log(finalOrderList);*/

});


