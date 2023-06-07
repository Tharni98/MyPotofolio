//select the button and add an event to it
document.getElementById("btnCustomerSave").addEventListener("click", function () {

    //get typed values of input fields
    let id = document.getElementById("txtCustomerID").value;
    let name = document.getElementById("txtCustomerName").value;
    let address = document.getElementById("txtCustomerAddress").value;
    let number = document.getElementById("txtCustomerNumber").value;

    //let's print it
    console.log(id,name,address,number);

    //catch the table body
    let tBody=document.getElementById("tblCustomer");

    // let's see how we should insert a table row using html format
    //<tr>
    // <td>id</td>
    // <td>name</td>
    // <td>address</td>
    // <td>salary</td>
    // </tr>

    //ok then, let's create the above row
    let tr= document.createElement("tr");

    //let's create another four columns
    let col1= document.createElement("td");
    let col2= document.createElement("td");
    let col3= document.createElement("td");
    let col4= document.createElement("td");

    //set input fields values to the above created columns
    col1.textContent=id;
    col2.textContent=name;
    col3.textContent=address;
    col4.textContent=salary;

    //set 4 columns to the previously created row
    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);

    //set the row to the table body
    tBody.appendChild(tr);

    //Work done;
});