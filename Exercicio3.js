/* Crie uma função que recebendo um número permita 
saber se este é par ou ímpar (vamos assumir apenas 
números inteiros positivos) */

function parimpar(n) {
    if (n % 2 == 0) {
        return `par`
    } else {
        return `impar`
    }
}
console.log(parimpar(5))


/* Crie uma função que faça output de 
todas as strings no Array 
[‘Hello’, ‘World’, ‘!’], 
numa só linha. Output
esperado “Hello World !”; */


function msg1() {
    const msg = ['Hello', 'World', '!']
    let final = ''
    for (let i = 0; i < msg.length; i++) {
        final = final + `${msg[i]} `
    }
    console.log(final)

}
msg1()


/*Crie uma função que receba 2 
números inteiros e os retorne num Array 
ordenado do maispequeno para o maior; */
function menor() {

    var msg = ['5', '3']
    msg.sort()
    console.log(msg)
}
menor()


/*3.4 – Crie uma função que receba 2 números 
inteiros diferentes e que percorra todos os 
números entre eles, contado quantos números 
no intervalo são pares e quantos são limpares, 
no final deverá retornar um Objecto 
com 2 propriedades 
“contagemPares”, “contagemImpares” 
com as respetivas contagens.
*/

function contarnumeros(numero1, numero2) {
    let menor = numero1
    let maior = numero2
    if (numero1 === numero2) {
        return "apresente numeros diferentes"
    }
    if (menor > maior) {
        menor = numero2
        maior = numero1
    }
    const output = {
        contagemPares: 0,
        contagemImpares: 0,
    }
    for (let i = menor; i < maior; i++) {
        if (i % 2 === 0) {
            output.contagemPares++
        } else {
            output.contagemImpares++
        }

    }
    return output;
} console.log(contarnumeros(6, 9))



/* 

3.4.1 Faça output para a consola das contagens exemplo: “Pares: 4, Ímpares: 5”
 */

function contarnumeros(numero1, numero2) {
    const output = {
        contagemPares: 0,
        contagemImpares: 0,

    }
    for (let i = numero1; i < numero2; i++) {
        if (i % 2 === 0) {
            output.contagemPares++
        } else {
            output.contagemImpares++
        }

    }
    return output
}
const numeros = contarnumeros(2, 7)
console.log(`PARES:`, numeros.contagemPares)
console.log(`IMPARES:`, numeros.contagemImpares)


//• 3.5 – Crie uma função que faça output de todo o abecedário em letra 
//maiúscula. Dica utilizar tabela ascii.


function alfabeto() {
    for (let i = 65; i <= 90; i++) {
        console.log(String.fromCharCode(i))

    }
}
alfabeto();


//• 3.6 – Crie um menu que apresente como opções os exercícios 3.4 e 3.5 
//num menu e que permita ao utilizador escolher qual das funções executar. 
//NOTA: utilize o módulo READLINE de node.js


const readline = require('readline');

function menu() {

    console.log(`======= MENU =======`)
    console.log(`[1]exercicios 3.4`)
    console.log(`[2]exercicios 3.5`)

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Escolha uma opção ', function (opcao) {
        console.log(`Você escolheu a opção: ${opcao}`);
        if (opcao == 1) {
            const numeros = contarnumeros(1, 12)
            console.log(`Pares: ${numeros.contagemPares}`)
            console.log(`Impares: ${numeros.contagemImpares}`)
        }
        if (opcao == 2) {
            alfabeto()
        }
        rl.close();
    });
}
function contarnumeros(numero1, numero2) {
    let menor = numero1
    let maior = numero2
    if (numero1 === numero2) {
        return "apresente numeros diferentes"
    }
    if (menor > maior) {
        menor = numero2
        maior = numero1
    }
    const output = {
        contagemPares: 0,
        contagemImpares: 0,
    }
    for (let i = menor; i < maior; i++) {
        if (i % 2 === 0) {
            output.contagemPares++
        } else {
            output.contagemImpares++
        }

    }
    return output;
}

function alfabeto() {
    for (let i = 65; i <= 90; i++) {
        console.log(String.fromCharCode(i))

    }
}
menu()

