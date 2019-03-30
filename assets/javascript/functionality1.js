// Initialize Firebase
var config = {
  apiKey: "AIzaSyBDyLpzCS8pimBAzwnGwZa0WWoUlf3BQ2k",
  authDomain: "group-project-1-c2e2d.firebaseapp.com",
  databaseURL: "https://group-project-1-c2e2d.firebaseio.com",
  projectId: "group-project-1-c2e2d",
  storageBucket: "group-project-1-c2e2d.appspot.com",
  messagingSenderId: "355709778913"
};

firebase.initializeApp(config);

// store firebase in variable
var database = firebase.database();

//  function to get the ingredients to be searched for
function generateResults() {
  let searchVal = getIngredients();
  let YOUR_APP_ID = 'b39fa4a4';
  let YOUR_APP_KEY = '734bf2b0831c3cfb3c8fa44c770d523b';
  let queryURL = "https://api.edamam.com/search?q=" + searchVal + "&app_id=b39fa4a4&app_key=734bf2b0831c3cfb3c8fa44c770d523b"

  // ajax call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    let selections = [];

    $("#results").empty();

    for (var i = 0; i < 10; i++) {
      let hit = response.hits[i];
      var recipe = hit.recipe.label;
      var ingredients = hit.recipe.ingredientLines;
      var time = hit.recipe.totalTime;
      var image = hit.recipe.image;

      createRow(image, recipe, time, ingredients);
    }
  });
}

