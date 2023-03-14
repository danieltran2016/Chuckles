async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com/slack", {method: "get", headers: {"Content-type": "application/json"} });
   const data= await response.json() 
   console.log(data)
  }
  fetchJoke();