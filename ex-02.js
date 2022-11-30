import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Give me size ', (size) => {
    const newsize = parseInt(size);
    
    for (let i = 0;i < newsize; i++) {
        let line = '';
        for(let j = 0;j < i; j++) {
            line += ` *`
        }
        console.log(line);
    }
    rl.close();
})