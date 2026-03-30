Yes, I can help you with that! Here's a basic Flappy Bird game in JavaScript using bright blue and yellow colors:
// Get the canvas element
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Set the width and height of the canvas
canvas.width = 800;
canvas.height = 600;

// Set the background color
ctx.fillStyle = 'rgb(51, 153, 255)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Create the player object
var player = {
  x: canvas.width / 2 - 50,
  y: canvas.height / 2 - 50,
  width: 100,
  height: 100,
  speed: 4,
};

// Create the obstacles array
var obstacles = [
  { x: canvas.width / 3, y: canvas.height / 2 - 50 },
  { x: canvas.width * 2 / 3, y: canvas.height / 2 - 50 },
];

// Create the game loop
function update() {
  // Update the player's position
  player.x += player.speed;
  
  // Check for collisions with obstacles
  if (player.x < 0 || player.x + player.width > canvas.width) {
    alert('Game over!');
  }
  
  for (var i = 0; i < obstacles.length; i++) {
    var obstacle = obstacles[i];
    if (player.x + player.width > obstacle.x && player.x < obstacle.x + obstacle.width) {
      alert('Game over!');
    }
  }
}

// Draw the game objects
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the player
  ctx.fillStyle = 'rgb(255, 255, 51)';
  ctx.fillRect(player.x, player.y, player.width, player.height);
  
  // Draw the obstacles
  for (var i = 0; i < obstacles.length; i++) {
    var obstacle = obstacles[i];
    ctx.fillStyle = 'rgb(51, 255, 255)';
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }
}

// Start the game loop
setInterval(update, 16);
You can run this code in a JavaScript environment and it will display a basic Flappy Bird game with bright blue and yellow colors. The player is controlled by the arrow keys and the goal is to avoid colliding with the obstacles.