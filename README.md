# Simon Game Project

## 🎯 Project Purpose
The Simon Game is a fun, interactive game inspired by the classic electronic memory game. The goal is to replicate an increasingly complex sequence of colors and sounds to test and improve your memory. This project is designed to enhance the understanding of event handling, DOM manipulation, and responsive design for both desktop and mobile environments.

## 🚀 How the Game Works

### Starting the Game:

On desktop, press any key to begin the game.
On mobile, tap anywhere outside the color buttons to start the game.
#### Game Sequence:

A new color in the sequence will be highlighted with a sound and visual effect after each round.
You need to repeat the sequence by tapping the corresponding buttons in the correct order.

#### Correct Sequence:

If you match the sequence correctly, the level increases, and a new color is added to the pattern.
The sequence becomes progressively longer and more difficult.

#### Game Over:

If you make a mistake, a "Game Over" sound plays, the screen flashes, and the game resets.
To restart, press any key (on desktop) or tap again (on mobile).

### 💻 Technologies Used

#### HTML: Structure of the game and buttons

#### CSS: Styling and animations for the game buttons and effects

#### JavaScript/jQuery: Logic for the game, handling interactions, animations, and sounds

### File Structure:

#### index.html: Contains the structure of the Simon game.

#### styles.css: Holds the styling rules for the buttons and effects.

#### index.js: Handles the game logic, user input, and interactions.

#### sounds folder: Contains .mp3 files for each button sound.

### Browser Testing:

Test the game in both desktop and mobile browsers to ensure a smooth experience.

### 📝 How to Play Effectively

Pattern Recognition: Focus on the sequence and develop a rhythm as the levels increase.

Avoid Double Taps: On mobile, use light, single taps to avoid accidental multiple clicks.

Restart Strategy: If the game ends frequently on mobile, ensure there are no unintended gestures interfering by adjusting zoom or touch sensitivity.

### ✨ Hints and Improvements

You can add a restart button if you want more explicit control rather than tapping random areas.

Implement a high score system to track your best performance.

Add difficulty levels to adjust the speed of the animations or the number of initial steps.


