function converter() {
    const nbin = document.getElementById('bnum').value;
    if (nbin === '') return alert('É necessário inserir um número binário para a conversão.');
    if (nbin.length > 8) return alert('Foi excedito o limite de 8 dígitos para a conversão.');

    // nbin.split('').map((char) => {
    //     if (char !== '0' && char !== '1') return alert('O valor inserido não é binário.');
    // });

    // A FUNÇÃO ACIMA CORREPONDE A FUNÇÃO A BAIXO

    nbin.split('').map(function(char){
        if (char !== '0' && char !== '1') return alert('O valor inserido não é binário.');
        else{
            const ndec = parseInt(nbin, 2);
            document.getElementById('dnum').value = ndec;
            return true;
        }
    });
}


/* 

O QUE FOI APRENDIDO COM ESTE CÓDIGO

1. O método split() divido um objeto STRING em um array de string. Exemplo: Ao digitar 1000, o método split() pegará está string e a converterá para um array [1,0,0,0].
2. O método map() invoca a função callback passada por argumento para acada elemento do Array. Neste caso, o método split() transformou a string em um array, para então
o método map() fazer a varredura de cada substring para verificar se todas correspondem a 0s ou 1s.
3. Expressão arrow function: corresponde a uma sintaxe mais curta se comparada a de uma expressão de função. Estas expressões são melhores aplicadas para funções que não
sejam métodos, e elas não podem ser usadas como construtoras.

*/
