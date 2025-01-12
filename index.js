const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let gameStarted = false;

let level = 0;

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

$(document).ready(() => {
    if (isMobile) {
        $("#level-title").text("Tap outside the buttons to start");
    }
});


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
$(document).on("pointerdown", function (e) {
    if (!gameStarted && !$(e.target).hasClass("btn")) {
        startGame();  
    }
});


const nextSequence = () => {
    level ++;

    $("#level-title").text(`Level ${level}`); 

    const randomNumber = Math.floor(Math.random() * buttonColours.length);

    const randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);

    gamePattern.forEach((colour, index) => {
        setTimeout(() => {
            $(`#${colour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(colour);
            animatePress(colour);
        }, 500 * index); 
    });
}

const playSound = (name) => {
    const audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

const handleClick = () => {
    $(".btn").off("pointerdown").on("pointerdown", function(e) {
        e.preventDefault();
        e.stopPropagation(); 

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

        const gameOverMessage = isMobile ? "Game Over, Tap to Restart" : "Game Over, Press Any Key to Restart";

        $("#level-title").text(gameOverMessage);

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
