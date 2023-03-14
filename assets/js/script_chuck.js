//var category = ["animal","career","celebrity","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];

 
var showHis = document.querySelector('#chuck-history');
var clear = document.querySelector('#clear-chuck');
var historyList = document.querySelector("#chuck-history-list");
var button = document.querySelector('#chuck-btn');
var chuckRep = document.querySelector('#chuck-joke');
var newJoke = [];

function init(){
 var storedChucks = JSON.parse(localStorage.getItem("data"))
 if (storedChucks !== null) { 
   newJoke = storedChucks;  
    
 }
   renderChucks(); 
 }

 function renderChucks() {
   historyList.innerHTML = ""; 
   for (var i = 0; i < newJoke.length; i++) { 
     var jokes = newJoke[i]; 
     var li = document.createElement("li"); 
     li.textContent = jokes; 
     li.setAttribute("data-index", i); 
     historyList.appendChild(li); 
   }
 }
 init()

 function storedChucks() {
   localStorage.setItem("chuck-data", JSON.stringify(newJoke)); 
 }

button.addEventListener("click", getChuck);

 function getChuck () {
   fetch('https://api.chucknorris.io/jokes/random')
   .then(response => response.json())
   .then(data => {chuckRep.textContent = data.value; 
   newJoke.push(data.value)})
   
   .catch(error => console.error(error));
 
  storedChucks()
  renderChucks()
 
}

clear.addEventListener("click", function(){

 localStorage.clear(); //this clears the local storage 
 location.reload(); // this refreshes the page. 
})
 


 

