import { assert } from "console";
import faturamento from "./dados.json" assert {type: 'json'};


let menor,maior,media = 0,diaSup = 0;

faturamento.forEach( (dados) =>{
    if(dados.dia == 1){
        menor = dados.valor;
        maior = dados.valor;
    }
    if(dados.valor != 0)
        media += dados.valor;
    if(dados.valor != 0 && menor > dados.valor)
        menor = dados.valor;
    if(maior < dados.valor)
        maior = dados.valor;
});

media /= 30;

for(let i = 0; i < 30; i++){
    if(faturamento[i]["valor"] > media)
        diaSup++;
}

console.log(`A média foi de: ${media}
O maior valor de faturamento ocorrido em um dia do mês: ${maior}
O menor valor de faturamento ocorrido em um dia do mês: ${menor}
Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diaSup}`);