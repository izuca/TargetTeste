const estados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const total = estados.SP + estados.RJ + estados.MG + estados.ES + estados.Outros;

let percSP,percRJ,percMG,percES,percOutros;

percSP = estados.SP / total;
percRJ = estados.RJ / total;
percMG = estados.MG / total;
percES = estados.ES / total;
percOutros = estados.Outros / total;

console.log(`O percentual de representação que cada estado teve dentro do valor total mensal da distribuidora:
São Paulo: ${percSP}%
Rio de Janeiro: ${percRJ}%
Minas Gerais: ${percMG}%
Espírito Santo: ${percES}%
Outros: ${percOutros}%`);
