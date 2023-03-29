let contador = 0;
let suma = 0;
while (contador <=10) {
    let numero=parseFloat(prompt("Ingrese el numero"));
    suma = suma + numero;
    contador++
}
console.log("El promedio es:",suma/10);