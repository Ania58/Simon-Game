const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let gameStarted = false;

let level = 0;


const startGame = (event) => {
    if (!gameStarted) {
        gameStarted = true;
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
        $("#level-title").text(`Level ${level}`);
        nextSequence();
    }
};

$(document).on("keydown", startGame);
$(document).on("touchstart", function (e) {
    if (!gameStarted && !e.target.classList.contains("btn")) {
        startGame(e);  
    }
});


const nextSequence = () => {
    level ++;

    $("#level-title").text(`Level ${level}`); 

    const randomNumber = Math.floor(Math.random() * buttonColours.length);

    const randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    animatePress(randomChosenColour);

}

const playSound = (name) => {
    const audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

const handleClick = () => {
    $(".btn").off("click touchstart").on("click touchstart", function() {
        const userChosenColour = this.id

        userClickedPattern.push(userChosenColour);

        playSound(userChosenColour);

        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length - 1);
        
    })
}

const animatePress = (currentColour) => {
    $(`#${currentColour}`).addClass("pressed");

    setTimeout(function() {
        $(`#${currentColour}`).removeClass("pressed");
    }, 100)
}


$(document).keydown(function () {
    if (gameStarted === false) {
        gameStarted = true;
        level = 0;  
        gamePattern = []; 
        userClickedPattern = [];
        $("#level-title").text(`Level ${level}`);
        nextSequence();
    } 
});


const checkAnswer = (currentIndex) => {
    if (gamePattern[currentIndex]===userClickedPattern[currentIndex]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
                userClickedPattern = [];  
            }, 1000);
        }
    } else {
        playSound("wrong");

        $("body").addClass("game-over");

        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200)

        startOver(); 
    }
}

const startOver = () => {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    gameStarted = false; 
};

handleClick();
