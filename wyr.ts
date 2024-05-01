import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askWouldYouRather(): void {
  const options = [
    ['Eat a bug', 'Drink a cup of dirt'],
    ['Be able to fly', 'Be able to breathe underwater'],
    ['Have unlimited money', 'Have unlimited time']
  ];
  const randomIndex = Math.floor(Math.random() * options.length);
  const [option1, option2] = options[randomIndex];

  rl.question(`Would you rather ${option1} or ${option2}? `, (answer) => {
    console.log(`You chose: ${answer}`);
    askNewQuestion();
  });
}

function askNewQuestion(): void {
  const newOptions = [
    ['Be able to talk to animals', 'Be able to read minds'],
    ['Live forever', 'Never age'],
    ['Have teleportation powers', 'Have invisibility powers']
  ];
  const newRandomIndex = Math.floor(Math.random() * newOptions.length);
  const [newOption1, newOption2] = newOptions[newRandomIndex];

  rl.question(`Would you rather ${newOption1} or ${newOption2}? `, (newAnswer) => {
    console.log(`You chose: ${newAnswer}`);
    rl.close();
  });
}

askWouldYouRather();
