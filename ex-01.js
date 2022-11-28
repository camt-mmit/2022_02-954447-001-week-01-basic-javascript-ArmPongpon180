import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Input your score: ', (score) => {
    const newScore = parseFloat(score)
    if (newScore >= 80) {
        console.log(`Your grade is A`);
    }else if (newScore >= 70) {
        console.log(`Your grade is B`);
    }else if (newScore >= 60) {
        console.log(`Your grade is C`);
    }else if(newScore >= 50) {
        console.log(`Your grade is D`);
    } else {
        console.log(`Your grade is F`);
    }
    rl.close();
})