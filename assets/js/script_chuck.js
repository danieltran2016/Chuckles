//var category = ["animal","career","celebrity","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];

var clearChuck = document.querySelector('#chuck-clear');
var chuckHistoryList = document.querySelector("#chuck-history-list");
var chuckButton = document.querySelector('#chuck-btn');
var chuckRep = document.querySelector('#chuck-joke');
var newJoke = [];


//get the stored chuck-data and render it
function init(){
 var storedChucks = JSON.parse(localStorage.getItem("chuck-data"))
 if (storedChucks !== null) { 
   newJoke = storedChucks;  
    
 }
   renderChucks(); 
 }
//render initial joke
 function renderChucks() {
   chuckHistoryList.innerHTML = ""; 
   for (var i = 0; i < newJoke.length; i++) { 
     var jokes = newJoke[i]; 
     var li = document.createElement("li"); 
     li.textContent = jokes; 
     li.setAttribute("data-index", i); 
     chuckHistoryList.appendChild(li); 
   }
 }
 init()
//stringify the data and set it in storage
 function storedChucks() {
   localStorage.setItem("chuck-data", JSON.stringify(newJoke)); 
 }
//click event listener added to getChuck function
chuckButton.addEventListener("click", getChuck);

 function getChuck () {
   fetch('https://api.chucknorris.io/jokes/random')
   .then(response => response.json())
   .then(data => {chuckRep.textContent = data.value; 
   newJoke.push(data.value)})
   
   .catch(error => console.error(error));
 
  storedChucks()
  renderChucks()
 
}
//click event listener added to clear the locally stored chuck-data and reload the page
clearChuck.addEventListener("click", function(){

 localStorage.removeItem('chuck-data'); 
 location.reload(); 
})
 


 

