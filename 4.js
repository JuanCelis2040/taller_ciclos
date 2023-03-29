let contador = 0;
let cantidadNumeros = 0;
let n =Number(prompt("Ingrese un numero"))
while (contador <= n) {
  if (contador % 2 != 0){
    console.log(contador, " es impar");
    cantidadNumeros++
  }
  contador++;
}
console.log("La cantidad de impares es:",cantidadNumeros);