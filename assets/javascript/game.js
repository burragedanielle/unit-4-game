
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

// 1. game starts with RANDOM NUMBER displayed
var randomNumber = Math.floor(Math.random() * 50);
$("#random-number").html(randomNumber);
    
    // game starts with zero user wins
    var wins = 0; 
    $("#wins").html(wins);

    // game starts with zero user losses 
    var losses = 0; 
    $("losses").html(losses);

    //game starts with zero on the counter
    var totalScore = 0;

// 2.  when user clicks CRYSTAL BUTTON

//***dev note: add an attribute for each button that holds the increments 

var increments = [6, 4, 3, 7];

for (var i = 0; i < length.increments; i++) {

    
};

    $(".crystal-image").on("click", function() {

        var crystalValue = ($(this).attr("crystal-data-value"));
        crystalValue = parseInt(crystalValue);
        totalScore+= crystalValue;
        
        alert("New score " + totalScore + " !")

        if(totalScore === randomNumber) {
            alert("You win!");
            wins++; 
    
        } else if (totalScore > randomNumber) {
            alert("You lose!");
            losses++; 
        }
        
    });

    

// 3. user wins if
        //- TOTAL SCORE = RANDOM NUMBER
    
// 4. user loses if
        // - TOTAL SCORE > RANDOM NUMBER 

// 5. when user wins or loses, game restarts
        // - new RANDOM NUMBER
        // - new CRYSTAL BUTTON VALUE 





    