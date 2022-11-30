// const numer = parseInt(process.argv[2]);
let numeber = 4;

for(let i = 1;i <= 12; i++) {
    let table = '';
    for(let j = 2;j <= numeber; j++){
        table = `${table} ${i * j}\t`
    }
    console.log(table);
}