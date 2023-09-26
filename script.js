//xml - http REQUST: it is used to interact with servers via API.
//step 01: create a XHR objects
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
   var result = JSON.parse(request.response);
    console.log(result);
}