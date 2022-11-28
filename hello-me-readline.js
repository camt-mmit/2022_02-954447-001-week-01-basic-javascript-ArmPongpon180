import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

// console.log('Input your name');
// rl.on('line', (name) => {
//     console.log(`hello ${name}`);
//     rl.close();
// });


rl.question('Input your name: ', (name) => {
    console.log(`Hello ${name}`);
    rl.close();
})