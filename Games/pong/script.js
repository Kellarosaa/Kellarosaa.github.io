let canvas = document.getElementById('game-container');
let ctx = canvas.getContext('2d');
let paddle = document.getElementById('paddle');
let ball = document.getElementById('ball');
let score = document.getElementById('score');

let paddleHeight = 100;
let paddleWidth = 10;
let ballDiameter = 20;
let ballSpeedX = 3;
let ballSpeedY = 3;
let scoreValue = 0;

let touchStartY = 0;
let touchEndY = 0;

canvas.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

canvas.addEventListener('touchmove', (e) => {
    touchEndY = e.touches[0].clientY;
    let paddleY = paddle.offsetTop;
    let deltaY = touchEndY - touchStartY;
    paddleY += deltaY;
    paddle.style.top = `${paddleY}px`;
    touchStartY = touchEndY;
});

function update() {
    let ballY = ball.offsetTop;
    let ballX = ball.offsetLeft;

    // Collision with paddle
    if (ballX <= paddle.offsetLeft + paddleWidth && ballY >= paddle.offsetTop && ballY <= paddle.offsetTop + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }

    // Collision with top and bottom walls
    if (ballY <= 0 || ballY + ballDiameter >= canvas.offsetHeight) {
        ballSpeedY = -ballSpeedY;
    }

    // Collision with left wall
    if (ballX <= 0) {
        scoreValue++;
        score.innerHTML = scoreValue;
        ballX = canvas.offsetWidth / 2;
        ballY = canvas.offsetHeight / 2;
        ballSpeedX = 3;
        ballSpeedY = 3;
    }

    // Update ball position
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    ball.style.top = `${ballY}px`;
    ball.style.left = `${ballX}px`;

    requestAnimationFrame(update);
}

update();
