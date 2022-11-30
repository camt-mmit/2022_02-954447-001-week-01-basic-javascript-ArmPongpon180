import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);
rl.question('What your score ', (score) => {
    const newScore = parseFloat(score);

    if (score >= 80) {
        console.log(`Your grade is A`);
    }
    if (score >= 70) {
        console.log(`Your grade is B`);
    }
    if (score >= 60) {
        console.log(`Your grade is C`);
    }
    if (score >= 50) {
        console.log(`Your grade is D`);
    } else {
        console.log(`Your grade is F`);
    }
    rl.close();
})