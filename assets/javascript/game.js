
// GAME STEPS

/* 1. game starts with RANDOM NUMBER displayed
    2.  when user clicks CRYSTAL BUTTON
        - show specific amount until user clicks crystal 
        - button click = specific number of points to TOTAL SCORE
        - add specific number of points to TOTAL SCORE 

    3.  user wins if
        - TOTAL SCORE = RANDOM NUMBER
    
    4. user loses if
        - TOTAL SCORE > RANDOM NUMBER 

    5. when user wins or loses, game restarts
        - new RANDOM NUMBER
        - new CRYSTAL BUTTON VALUE 
        - record user wins 
        - record user losses 

*/

// 1. User clicks start to begin

// 2. game starts with RANDOM NUMBER displayed


    // game starts with zero user wins
    var wins = 0; 
    $("#wins").html(wins);

    // game starts with zero user losses 

    var losses = 0; 
    $("#losses").html(losses);

    //game starts with zero on the counter

    var totalScore = 0;
    $("#user-total-score").html(totalScore);
    
    var crystalValues = [3, 6, 4, 7];

    var crystalImages = ["./assets/images/amethyst.png","./assets/images/peridot.png", "./assets/images/sapphire.png", "./assets/images/quartz.png"];

var randomNumber = Math.floor(Math.random() * 50);

function reset(){
    totalScore = 0;
};


for (var i = 0; i < crystalValues.length; i++) {
    var crystalDisplay = $("<img>");
    crystalDisplay.attr("crystal-data-value", crystalValues[i]);
    crystalDisplay.addClass("crystal-image");

    for (var j = 1; j < crystalImages.length; j++) {
        
        crystalDisplay.attr("src", crystalImages[j]);
    };
    
    $(".crystals").append(crystalDisplay);
       
};


$("#start-button").on("click", function() {
    randomNumber = Math.floor(Math.random() * 50);
    $("#random-number").html(randomNumber);
    $("#start-button").html("Restart Game");

});

// 3.  when user clicks CRYSTAL BUTTON

//***dev note: add an attribute for each button that holds the increments 

    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("crystal-data-value"));
        totalScore += parseInt(crystalValue);
        $("#user-total-score").html(totalScore);

    // 4. user wins if
        //- TOTAL SCORE = RANDOM NUMBER
        if(totalScore === randomNumber) {
            alert("You win!");
            wins+= 1
            console.log(wins);
            $("#wins").html(wins);
            reset();

    // 5. user loses if
        // - TOTAL SCORE > RANDOM NUMBER 
        } else if (totalScore > randomNumber) {
            alert("You lose!");
            losses+= 1
            console.log(losses);
            $("#losses").html(losses);
            reset();
            $("#user-total-score").html(totalScore);
        };  
    });



// 6. when user wins or loses, game restarts
        // - new RANDOM NUMBER
        // - new CRYSTAL BUTTON VALUE 





    