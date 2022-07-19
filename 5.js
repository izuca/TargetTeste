function stringInverter(palavra){
    let inverted = [];
    for(let i = 0; i < palavra.length; i++)
        inverted[i] = palavra[palavra.length - (i+1)];
    return inverted;
};

let palavra = "estágio";
let palavraInv = stringInverter(palavra).join("");

console.log(`A palavra ${palavra} invertida é: ${palavraInv}`);
