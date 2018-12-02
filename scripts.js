// Operador Lógico e (&&) 
// Retorna TRUE se os dois operandos forem true

//console.log(true && false);
//Operador Lógico ou (||)
//Retornar true se um dos operandos forem true
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('pode aplicar: ',podeAplicar);

// Operador NOT (!)
let candidatoRecusado = !podeAplicar;

console.log('Candidato Recusado',candidatoRecusado);





