//Create drawing variables
var canvas;
var ctx;

//Creat input variables
var upKey;
var rightKey;
var downKey;
var leftKey;

//Create game variables
var screenWidth = 1280;
var screenHeight = 720;
var gameLoop;
var player;
var borders = [];

//Runs once page has loaded
window.onload = function() {
    //Assign canvas and context variables
    canvas = document.getElementById('game-canvas');
    ctx = canvas.getContext("2d");

    //Setup key listeners
    setupInputs();

    //create player
    player = new Player(100, 400);

    //create Borders
    for (let i = 0; i < 6; i++) {
        borders.push(new Border(0 + 100 * i, 670, 100, 50, 1));
    }
    borders.push(new Border(0, 570, 100, 100, 2))
    borders.push(new Border(0, 470, 100, 100, 2))
    borders.push(new Border(0, 370, 100, 100, 2))
    borders.push(new Border(100, 370, 100, 100, 2))
    borders.push(new Border(200, 370, 100, 100, 2))
    borders.push(new Border(300, 370, 100, 100, 2))
    borders.push(new Border(400, 370, 100, 100, 2))
    borders.push(new Border(500, 370, 100, 100, 2))
    borders.push(new Border(500, 470, 100, 100, 2))

    //Start Game Loop
    gameLoop = setInterval(step, 1000/30)
    //Draw on the canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,screenWidth,screenHeight)
}

function step() {
    //Step player 
    player.step()
    // player.movement()

    //Draw everything
    draw();
}

function draw() {
    //Clear the canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,screenWidth,screenHeight)

    //Draw the player 
    player.draw();

    //Draw borders
    for (let i = 0; i < borders.length; i++) {
        borders[i].draw()
    }
}

function setupInputs() {
    document.addEventListener('keydown', function(event) {
        if (event.key === "w" || event.key === "ArrowUp") {
            upKey = true;
        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = true;
        } else if (event.key === "s" || event.key === "ArrowDown") {
            downKey = true;
        } else if (event.key === "d" || event.key === "ArrowRight") {
            rightKey = true;
        }
    })
    document.addEventListener('keyup', function(event) {
        if (event.key === "w" || event.key === "ArrowUp") {
            upKey = false;
        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = false;
        } else if (event.key === "s" || event.key === "ArrowDown") {
            downKey = false;
        } else if (event.key === "d" || event.key === "ArrowRight") {
            rightKey = false;
        }
    })
}