const container = document.getElementById("container");

// adding different green color codes in an array
var greenColorCodes = [
  "#7CFC00",
  "#78AB46",
  "#3B5323",
  "#458B00",
  "#BCED91",
  "#61B329",
  "#5DFC0A",
  "#4CBB17",
  "#4AC948",
  "#00EE00",
  "#33FF33",
  "#00C957",
];

// this will be our total number of squares for activity
const numberOfSquares = 182;

// using for loop for adding event listener to each activity box
for (let i = 0; i < numberOfSquares; i++) {
  const activity = document.createElement("div");
  activity.classList.add("activity");

  activity.addEventListener("mouseover", () => {
    addColor(activity);
  });
  activity.addEventListener("mouseout", () => {
    stickColor(activity);
  });
//   adding our activity div to container
  container.appendChild(activity);
}


function addColor(x) {
//   below line will give us random colors from the added color in the above array
  const gettingColor = greenColors();
  x.style.backgroundColor = gettingColor;
  x.style.boxShadow = `0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`;
}

function stickColor(x) {
  const gettingColor = greenColors();
  x.style.backgroundColor = `${gettingColor}`;
  x.style.boxShadow = `0 0 2px rgb(151, 151, 151)`;
}

function greenColors() {
  return greenColorCodes[Math.floor(Math.random() * greenColorCodes.length)];
}



let Onclick, Onclick1, Onclick2;
$(document).ready(function(){
  
  $("#first").click(function(){
        Onclick = true;
  });

  $("#second").click(function(){
        Onclick1 = true;
  });

  $("#third").click(function(){
        Onclick2 = true;
  });

  
  if(Onclick != true && Onclick1 != true && Onclick2 != true){
    $(".1").show();
    $(".2").hide();
    $(".3").hide();
  }
  else if(Onclick == true){
    $(".1").show();
    $(".2").hide();
    $(".3").hide();
  }

  else if(Onclick1 == true){
    $(".1").hide();
    $(".2").show();
    $(".3").hide();
  }

  else if(Onclick2 == true){
    $(".1").hide();
    $(".2").hide();
    $(".3").show();
  }

});

$(document).ready(function(){
  if($("#first").click(function(){}) != "true") {
    $(".display").hide();
  }

  $("#first").click(function(){
    $(".1").show();
    $(".2").hide();
    $(".3").hide();
  });
  $("#second").click(function(){
    $(".2").show();
    $(".1").hide();
    $(".3").hide();
  });
  $("#third").click(function(){
    $(".3").show();
    $(".1").hide();
    $(".2").hide();
  });
});