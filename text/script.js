let chatInput = document.getElementById('chat-input');
let sendBtn = document.getElementById('send-btn');
let seeBtn = document.getElementById('see-btn');
let chatLog = document.getElementById('chat-log');
let chatHistory = [];

sendBtn.addEventListener('click', () => {
    let message = chatInput.value.trim();
    if (message!== '') {
        chatHistory.push(message);
        chatLog.innerHTML += `<p>${message}</p>`;
        chatInput.value = '';
    }
});

seeBtn.addEventListener('click', () => {
    chatLog.innerHTML = '';
    chatHistory.forEach((message) => {
        chatLog.innerHTML += `<p>${message}</p>`;
    });
});
