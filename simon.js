var buttonColor=["green","red","yellow","blue"];

var gameStatus=false;
var level=0;

var gamePattern=[];
var userPattern=[];

$(document).keypress(function(){
    if(!gameStatus){
        $("h2").text("Level "+level);
        nextSequence();
        gameStatus=true;
    }
});

$(".btn").on("click",function(){
    var btnChosenColor=$(this).attr("id");
    userPattern.push(btnChosenColor);
    animatePress(btnChosenColor);
    checkAnswer(userPattern.length-1);
});

function checkAnswer(currentLevel){
    if(userPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("sucsess");
        if(gamePattern.length==userPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("Wronge");
        $("h2").text("Game Over")
        $("body").addClass("gameover");
        setTimeout(function(){
            $("body").removeClass("gameover");
        },200);
        startOver();
    }
}

function nextSequence(){
    userPattern=[];
    level++;
    $("h2").text("Level "+level);

    var random=Math.floor(Math.random()*4);
    console.log(random);
    var nextRandomColor=buttonColor[random];
    gamePattern.push(nextRandomColor);

    $("#"+nextRandomColor).fadeIn(200).fadeOut(200).fadeIn(200);
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}

function startOver(){
    level=0;
    gamePattern=[];
    gameStatus=false;
}