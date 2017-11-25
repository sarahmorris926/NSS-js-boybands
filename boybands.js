var bands = ["BTS", "Pretty Much", "5 Seconds of Summer", "The 1975", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];


// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById('boy-bands');

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById('vegetables');

// Start looping
for (var i = 0; i < bands.length; i += 1) {
  bandElement.innerHTML += "<p>" + bands[i] + "</p>";
}

for (var i = 0; i < vegetables.length; i += 1) {
  veggieElement.innerHTML += "<p>" + vegetables[i] + "</p>";
}