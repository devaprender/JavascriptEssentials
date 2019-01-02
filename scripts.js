// If..Else

// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// Se estiver entre 12:00 até 18:00 : Boa tarde!
// Caso contrário : Boa noite!
let hora = 22;

if (hora > 6 && hora < 12) {
    console.log("bom dia");
}
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde");
}
else {
 console.log("Boa noite");
}