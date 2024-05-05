const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

const paddleWidth = 75;
const paddleHeight = 15;
const paddleSpeed = 5;

const ballRadius = 10;
const ballSpeed = 3;

let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = canvas.height - paddleHeight - 20;

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballDX = ballSpeed;
let ballDY = ballSpeed;

function drawPaddle() {
  ctx.fillStyle = '#fff';
  ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2, false);
  ctx.fillStyle = '#fff';
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPaddle();
  drawBall();

  ballX += ballDX;
  ballY += ballDY;

  if (ballX + ballRadius > canvas.width || ballX - ballRadius < 0) {
    ballDX = -ballDX;
  }

  if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
    ballDY = -ballDY;
  }

  if (ballX > paddleX && ballX < paddleX + paddleWidth && ballY + ballRadius > paddleY) {
    ballDY = -ballDY;
  }

  requestAnimationFrame(update);
}

canvas.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  paddleX = touch.pageX - paddleWidth / 2;
});

canvas.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  paddleX = Math.max(0, Math.min(touch.pageX - paddleWidth / 2, canvas.width - paddleWidth));
});

update();
