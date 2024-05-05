const spinButton = document.getElementById('spin-button');
const caseRollingContainer = document.getElementById('case-rolling-container');
const resultText = document.getElementById('result-text');
const resultImage = document.getElementById('result-image');

// items array, you can add or remove items as needed
const items = [
    { text: 'Item 1', image: 'item1.png' },
    { text: 'Item 2', image: 'item2.png' },
    { text: 'Item 3', image: 'item3.png' },
    //...
];

spinButton.addEventListener('click', () => {
    // play animation
    caseRollingContainer.classList.add('animate');

    // wait for animation to finish
    setTimeout(() => {
        // generate a random item
        const randomItem = items[Math.floor(Math.random() * items.length)];

        // display the result
        resultText.textContent = `You rolled: ${randomItem.text}`;
        resultImage.src = `images/${randomItem.image}`;
        resultImage.alt = randomItem.text;

        // remove animation class
        caseRollingContainer.classList.remove('animate');
    }, 3000); // adjust the timeout to match the animation duration
});
