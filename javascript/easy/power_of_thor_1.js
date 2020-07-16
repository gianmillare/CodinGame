// Power of Thor - Episode 1
// https://www.codingame.com/ide/puzzle/power-of-thor-episode-1

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTx = parseInt(inputs[2]); // Thor's starting X position
var initialTy = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    var directionX = "";
    var directionY = "";

    if (lightX > initialTx) {
        directionX = "E";
        initialTx++;
    } else if (lightX < initialTx) {
        directionX = "W";
        initialTx--;
    }

    if (lightY > initialTy) {
        directionY = "S";
        initialTy++;
    } else if (lightY < initialTy) {
        directionY = "N";
        initialTy--;
    }

    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(directionY + directionX);
}
