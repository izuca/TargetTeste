let numero = 1;
const fib = [];

for (let i = 0; i <= numero; i++) {
    if (i == 0)
        fib.push(0);
    else if (i == 1)
        fib.push(1);
    else
        fib.push(fib[i-1] + fib[i-2]);

    if(numero == fib[i]){
        console.log(`O número ${numero} faz parte da sequência de Fibonacci`);
        break;
    } else if (numero == i){
        console.log(`O número ${numero} NÃO faz parte da sequência de Fibonacci`);
    }
}