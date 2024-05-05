const canvas = document.getElementById('pongCanvas');
const context = canvas.getContext('2d');

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  speed: 2,
  dx: 2,
  dy: 2
};

const paddle = {
  width: 75,
  height: 10,
  x: canvas.width / 2 - 37.5,
  y: canvas.height - 20,
  speed: 4
};

let currentScore = 0;
let highScore = 0;

function update() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.y + ball.radius > canvas.height) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy *= -1;
      currentScore++;
      if (currentScore > highScore) {
        highScore = currentScore;
      }
    } else {
      // reset the game
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      currentScore = 0;
    }
  }

  if (ball.y - ball.radius < 0) {
    ball.dy *= -1;
  }

  if (ball.x + ball.radius > canvas.width) {
    ball.dx *= -1;
  }

  if (ball.x - ball.radius < 0) {
    ball.dx *= -1;
  }

  if (ball.x > paddle.x && ball.x < paddle.x + paddle.width && ball.y + ball.radius > paddle.y) {
    ball.dy *= -1;
  }

  paddle.x += (ball.x - paddle.x - paddle.width / 2) * 0.1;
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  context.fillStyle = 'white';
  context.fill();
  context.closePath();

  context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

  context.fillStyle = 'white';
  context.font = '2rem Arial';
  context.fillText(currentScore, canvas.width
