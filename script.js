// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function(){
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let button = document.getElementById("formSubmit");
   let launchForm = document.getElementById("launchForm");
   let launchStatus = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let faultyItems = this.document.getElementById("faultyItems");
   let selectForm = document.getElementById("selectForm");
   let planetSelect = document.getElementById("planetSelect");
   let rVal = Math.floor(Math.random() * (1 + 5 - 0)) + 0;
   let planetButton = document.getElementById("planetButton");
   
   

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      return response.json();
  }).then(function(data) {
     let missionTarget = document.getElementById("missionTarget");

     missionTarget.innerHTML += `
      <h2>Mission Destination</h2>
      
         <ol>
            <li>Name: ${data[rVal].name} </li>
            <li>Diameter: ${data[rVal].diameter} </li>
            <li>Star: ${data[rVal].star} </li>
            <li>Distance from Earth: ${data[rVal].distance} </li>
            <li>Number of Moons: ${data[rVal].moons} </li>
         </ol>
         <img src="${data[rVal].image}">
      
     `  
     
   });


   planetButton.addEventListener("click",function(event){
      event.preventDefault();
      sVal = planetSelect.value;

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         return response.json();
     }).then(function(data) {
        let missionTarget = document.getElementById("missionTarget");
   
        missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         
            <ol>
               <li>Name: ${data[sVal].name} </li>
               <li>Diameter: ${data[sVal].diameter} </li>
               <li>Star: ${data[sVal].star} </li>
               <li>Distance from Earth: ${data[sVal].distance} </li>
               <li>Number of Moons: ${data[sVal].moons} </li>
            </ol>
            <img src="${data[sVal].image}">
         
        `  
        
      });

      
   });
   
   

   launchForm.addEventListener("submit",function(event){
      event.preventDefault();
      if (pilotName.value === ""){
         alert("All Fields are Required Yo! Go back and fix it!");
       } else {
          pilotStatus.innerHTML = `${pilotName.value} is Ready!`;
       };

      if (copilotName.value === ""){
         alert("All Fields are Required Yo! Go back and fix it!");
      } else {
         copilotStatus.innerHTML = `${copilotName.value} is Ready!`;
      };

      if (fuelLevel.value === ""){
         alert("All Fields are Required Yo! Go back and fix it!");
      } else if (fuelLevel.value < 10000){
         fuelStatus.innerHTML = "There is not enough fuel for the journey";
         launchStatus.innerHTML = "Shuttle not ready for launch";
      };

      if (cargoMass.value === ""){
         alert("All Fields are Required Yo! Go back and fix it!");
      } else if (cargoMass.value > 10000){
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
      };

      if(cargoMass.value > 10000 || fuelLevel.value < 10000){
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         faultyItems.style.visibility = "visible";
      } else {
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         faultyItems.style.visibility = "Hidden";
      };



   });
   

});