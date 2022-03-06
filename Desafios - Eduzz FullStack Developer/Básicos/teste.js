// DESAFIO 1/3 - Cálculo da diferênça de pressão mínima do pneu

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());

if (1 <= valor1 <= 40 && 1 <= valor2 <= 40) {
    console.log(valor1 - valor2)
}



// DESAFIO 2/3 - Cálculo para quantidade mínima de triângulos para formar um polígono regular

let lados = parseInt(gets());
console.log(lados - 2)



// DESAFIO 3/3 - Imprimir 6 números ímpares sequências de um dado numero (incluindo o número se for ímpar)

let valor = parseInt(gets());

for (cont = 1; cont < 7; cont++) {

    switch (valor % 2 == 0) {

        case true:
            valor++;
            console.log(valor);
            valor += 2;
            break;

        default:
            console.log(valor);
            valor += 2;
            break; 
    }

}