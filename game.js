let buttonsColor = ["red", "blue", "green", "yellow"]
let gamePattern = []
var userClickedPattern =[]
var level = 0


$(document).keypress(function(){             //if it is the first time use the keypress to start the game by setting the start parameter 
  if (!started){                             // not equal to start 
    $(".level-title").text("level" + level)    // call the nextsequence function for the computer to start the game and set a random value 
    nextSequence()
    started = true                            // set the start to true b/c nextsequence is only calles onse
  }
})

$(".btn").click(function(){
  var userChosenColor = $(this).attr("id")  // select the id of the button clicked
  userClickedPattern.push(userChosenColor)  // append it to the user array
  //console.log(userClickedPattern)
  playSound(userChosenColor)                //play sound
  animatePress(userChosenColor)
  checkAnswer(userClickedPattern.length - 1)
})

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
   console.log("success")
   if (userClickedPattern.length === gamePattern.length){
     setTimeout(function(){
       nextSequence()
     },1000)
   }
  }else{
    console.log("failler")
    playSound(wrong)
  
    $("body").addClass("game-over")
    setTimeout(function(){
      $("body").removeClass("game-over")},200)
    $("level-title").text("game is over, press any key to restart ")
  }
 }

function nextSequence() {
  userClickedPattern = []          // set the array to empty to let the user start from 0 and reenter the color conbo 
  level++                                     //after u right the codes below
  
 //************************ */
 $(".level-title").text("level" + level)
  var randomNumber = Math.floor(Math.random() * 4)   // generate a randome number
  let randomeChosenColor = buttonsColor[randomNumber]  // select the randome color from buttonsColor 
  gamePattern.push(randomeChosenColor)                  // apped it to the computer array
  console.log(randomeChosenColor)
  $("#" + randomeChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)    // to show animatio when the computer select a randome pattern  s
  playSound(randomeChosenColor)                                     //play sound 
 
}


function playSound(name){
  var audio = new Audio("sounds/"+ name + ".mp3");
  audio.play();
}

function animatePress(color){
  $("#" + color).addClass("pressed")
    
  setTimeout(function(){ 
    $("#" + color).removeClass("pressed")}, 100
  )
}

