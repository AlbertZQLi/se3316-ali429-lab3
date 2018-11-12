function createCORSRequest(method, url) {   

    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
  
      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      console.log(xhr.open(method, url, true));
      xhr.open('GET', "https://se3316-nodejs-ali429.c9users.io/api/", true);
      xhr.onload = function(){

      }
      xhr.send();
        
    } else if (typeof XDomainRequest != "undefined") {
  
      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
  
      // Otherwise, CORS is not supported by the browser.
      xhr = null;
  
    }
    return xhr;
  }
  
  function display(){
  
   
      url = "https://se3316-nodejs-ali429.c9users.io/api/bears"
      fetch(url)
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
        console.log(data);
        
        for(var i = 0; i < data.length; i++){
        
   var items = document.getElementById('items');
    var itemp = document.createElement('p');
    
      itemp.appendChild(document.createTextNode("Item name: "+ data[i].name+", price: $"+data[i].price+", quantity: " + data[i].quantity+", tax: "+data[i].tax+"%, id: "+data[i]._id));
      
      

    items.appendChild(itemp);

        }
    
        })

    
        

    
}

function initialize(){
  var options = document.getElementById("options");
  
  var nameInput = document.createElement("input");
  nameInput.setAttribute("id", "nameInput");

  var priceInput = document.createElement("input");
  priceInput.setAttribute("id", "priceInput");
  
  var quantInput = document.createElement("input");
  quantInput.setAttribute("id", "quantInput");
  
  var taxInput = document.createElement("input");
  taxInput.setAttribute("id", "taxInput");
  taxInput.setAttribute("value", 0);
  
  var inputButton = document.createElement("button");
  inputButton.setAttribute("id", "inputButton");
  inputButton.appendChild(document.createTextNode("Add Item"));
  inputButton.setAttribute("onClick", "addItem()");
  
  options.appendChild(document.createElement("p").appendChild(document.createTextNode("Item Name: ")));
  options.appendChild(nameInput);
  
  options.appendChild(document.createElement("p").appendChild(document.createTextNode("Item Price: ")));
  options.appendChild(priceInput);
  
  options.appendChild(document.createElement("p").appendChild(document.createTextNode("Item Quantity: ")));
  options.appendChild(quantInput);
  
  options.appendChild(document.createElement("p").appendChild(document.createTextNode("Item Tax: ")));
  options.appendChild(taxInput);
  options.appendChild(inputButton);
  
  var deleteDiv = document.getElementById("deleteDiv");
  
  var deleteInput = document.createElement("input");
  deleteInput.setAttribute("id","deleteInput");
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "deleteButton");
  deleteButton.appendChild(document.createTextNode("Delete Item"));
  deleteButton.setAttribute("onClick", "deleteItem()");
  
  deleteDiv.appendChild(document.createElement("p").appendChild(document.createTextNode("Item to be deleted: ")));
  deleteDiv.appendChild(deleteInput)
  deleteDiv.appendChild(deleteButton);
  
/*  var updateDiv = document.getElementById("updateDiv");
  
  var updateInput = document.createElement("input");
  updateInput.setAttribute("id","updateInput");
  var updateButton = document.createElement("button");
  updateButton.setAttribute("id", "updateButton");
  updateButton.appendChild(document.createTextNode("Update Item"));
  updateButton.setAttribute("onClick", "deleteItem()");*/
  /*  
    deleteDiv.appendChild(document.createElement("p").appendChild(document.createTextNode("Item to be deleted: ")));
    deleteDiv.appendChild(deleteInput)
    deleteDiv.appendChild(deleteButton);*/
  
}

function addItem(){
   var url = "https://se3316-nodejs-ali429.c9users.io/api/bears"
   var nameInput = document.getElementById("nameInput").value;
   var priceInput = document.getElementById("priceInput").value;  
   var quantInput = document.getElementById("quantInput").value;
   var taxInput = document.getElementById("taxInput").value;
  var data = new URLSearchParams();
  
  data.append('name', nameInput);
  data.append('price', priceInput);
  data.append('quantity',parseInt(quantInput));
    data.append('tax',parseInt(taxInput));
  
  
  var request = new Request(url, {
    method: 'POST',
    body:data
  })
  fetch(request)
  .then(function(data){
    console.log(data);

    })
    location.reload();
  
}



document.addEventListener("DOMContentLoaded", function(event){
  
  display();
  initialize();
  
})

function deleteItem(){
  
  var deleteInput = document.getElementById("deleteInput").value;

   var url = "https://se3316-nodejs-ali429.c9users.io/api/bears/"+deleteInput;
   console.log(url)
  
  var deleteReq = new Request(url, {
    method: 'DELETE'
  })
  fetch(deleteReq)
  .then(function(data){
    console.log(data);
    })
    location.reload();
  
};