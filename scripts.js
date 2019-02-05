// Criar uma função que exibe a quantidade de * 
// que aquela linha possui
exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
//     let padrao = '';
//     for(let linha = 1; linha <= linhas; linha++){
//           padrao += '*';
//           console.log(padrao);
//     }
      for(let linha = 1; linha <= linhas; linha++){
            let padrao = '';
            for(let i = 0; i < linha; i++){
                  padrao += '*';
            }
            console.log(padrao);
      }
}

