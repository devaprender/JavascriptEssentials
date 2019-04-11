// JAVASCRIPT AULA 59 COMBINANDO E CORTANDO ARRAYS
const primeiro = [{id:1}];
const segundo = [4,5,6];
primeiro[0].id = 10;
// Combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);
// Dividir
const cortado = combinado.slice();
console.log(cortado);