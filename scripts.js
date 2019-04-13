//  JAVASCRIPT AULA 55 O OPERADOR SPREAD
const primeiro = [1,2,3];
const segundo = [4,5,6];

// const combinado = primeiro.concat(segundo);
const combinado = [...primeiro,'a',...segundo,'#'];
console.log(combinado);
// const cortado = combinado.slice();
const clonado = [...combinado];
console.log(clonado);

// 1,2,3,'%',4,5,6