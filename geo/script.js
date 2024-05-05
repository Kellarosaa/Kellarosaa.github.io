const canvas = document.getElementById("gameCanvas");
const scoreElement = document.getElementById("score");

let playerX = 100;
let playerY = 150;
let score = 0;

const obstacles = [];

function createObstacle() {
  const obstacle = document.createElement("div");
  obstacle.className = "obstacle";
  obstacle.style.left = Math.random() * (canvas.clientWidth - 20) + "px";
  obstacle.style.bottom = "0";
  canvas.appendChild(obstacle);
  obstacles.push(obstacle);
}

function moveObstacles() {
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].style.bottom = obstacles[i].offsetTop - 2 + "px";
    if (obstacles[i].offsetTop > canvas.clientHeight) {
      obstacles[i].style.bottom = "0";
    }
  }
}

function updateScore() {
  scoreElement.textContent = "Score: " + score;
}

function jump() {
  if (playerY === 150) {
    playerY = 0;
    let gravity = setInterval(() => {
      playerY += 5;
      document.getElementById("player").style.bottom = playerY + "px";
      if (playerY > 150) {
        playerY = 150;
        clearInterval(gravity);
      }
    }, 10);
  }
}

function checkCollision() {
  for (let i = 0; i < obstacles.length; i++) {
    if (playerX >= obstacles[i].offsetLeft && playerX <= obstacles[i].offsetLeft + 20 && playerY === 150) {
      score++;
      updateScore();
      createObstacle();
      obstacles.splice(i, 1);
      break;
    }
  }
}

function gameLoop() {
  moveObstacles();
  checkCollision();
  requestAnimationFrame(gameLoop);
}

function startGame() {
  const player = document.createElement("div");
  player.className = "player";
  player.style.left = playerX + "px";
  player.style.bottom = playerY + "px";
  canvas.appendChild(player);

  createObstacle();
  createObstacle();
  createObstacle();

  gameLoop();
}

startGame();

canvas.addEventListener("click", jump);
