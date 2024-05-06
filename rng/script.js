const items = [
    { name: 'level 1 mob boss', chance: 05, image: 'item1.png' },
    { name: 'rare', chance: 0.2, image: 'item2.png' },
    { name: 'sigma', chance: 0.1, image: 'item3.png' },
    { name: 'Item 1', chance: 0.3, image: 'item1.png' },
    { name: 'Item 2', chance: 0.2, image: 'item2.png' },
    { name: 'Item 3', chance: 0.5, image: 'item3.png' },
    // Add more items here
];

const rollButton = document.getElementById('roll-button');
const resultDiv = document.getElementById('result');

rollButton.addEventListener('click', rollItem);

function rollItem() {
    const randomNum = Math.random();
    let rolledItem = null;

    for (let i = 0; i < items.length; i++) {
        if (randomNum < items[i].chance) {
            rolledItem = items[i];
            break;
        }
    }

    if (rolledItem) {
        resultDiv.innerHTML = `You rolled a ${rolledItem.name}! (Chance: ${rolledItem.chance * 100}%)`;
        // You can also display the image here
        // const img = document.createElement('img');
        // img.src = rolledItem.image;
        // resultDiv.appendChild(img);
    } else {
        resultDiv.innerHTML = 'Error: No item rolled.';
    }
}
