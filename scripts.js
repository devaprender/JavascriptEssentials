// for
// while
// do-while

//for-in

const pessoa = {
    nome: 'Jhonatan',
    idade: 25
};

for(let chave in pessoa) {
    console.log(chave,pessoa['nome']);
}

const cores = ['Vermelho','Azul','Verde'];

for (let indice in cores) {
    console.log(indice,cores[indice])
}

//for-of