//var myTitle = "Astro Weight Calculator" document.getElementById("myTitle").innerHTML = (myTitle);

function Calculate() {
  var planets = [
    {planet: 'Sun', gravity: 27.9},
    {planet: 'Mercury', gravity: 0.377},
    {planet: 'Venus', gravity: 0.9032},
    {planet: 'Earth', gravity: 1},
    {planet: 'Moon', gravity: 0.1655},
    {planet: 'Mars', gravity: 0.3895},
    {planet: 'Jupiter', gravity: 2.640},
    {planet: 'Saturn', gravity: 1.139},
    {planet: 'Uranus', gravity: 0.917},
    {planet: 'Neptune', gravity: 1.148},
    {planet: 'Pluto', gravity: 0.06}
   ];

     var theWeight = document.getElementById("myWeight").value;
     var thePlanet = document.getElementById("selectPlanet").value;
     var totalWeight = theWeight * planets[thePlanet].gravity;
     var result =  " If you were on " + planets[thePlanet].planet + ", your weight would be " + totalWeight + "lbs!";


     document.getElementById("result").innerHTML = result;
 }
