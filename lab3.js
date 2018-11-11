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
    var id = document.createElement('p');

      id.appendChild(document.createTextNode(data[i].name));

    items.appendChild(id);
        }
    
        })

    
        

    
}
