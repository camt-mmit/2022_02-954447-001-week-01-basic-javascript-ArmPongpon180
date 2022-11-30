import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Input size: ', (size) => {
    const n = parseInt(size);

    for(let i = 0;i < n;i++){
        let line = '';
        for(let j = 0; j < n; j++){
            line += ((j+i) >= n-1) ? `${i}` : ` `;
        }
        console.log(line);
    }
    rl.close();
})