Problema 1: Calcular el área de un rectánguloEscribe una función de JavaScript llamada computeArea que tome dos parámetros, ancho y alto, y devuelva el área del rectángulo.

javascript
// Ejemplo de uso:
const area = computeArea(5, 8)
console.log(area) // Resultado: 40

## Problema 2: Convertir Fahrenheit a CelsiusEscribe una función de JavaScript llamada convertFToC que tome una temperatura en Fahrenheit como parámetro y devuelva la temperatura equivalente en Celsius.

javascript
// Ejemplo de uso:
const temperaturaCelsius = convertFToC(68)
console.log(temperaturaCelsius) // Resultado: 20

## Problema 3: Invertir una cadenaEscribe una función de JavaScript llamada invertString que tome una cadena como parámetro y devuelva la cadena invertida. Por ejemplo, si la entrada es “hola”, la salida debería ser “aloh”.

javascript
// Ejemplo de uso:
const cadenaInvertida = invertString('hola')
console.log(invertString) // Resultado: "aloh"
--
function invertString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }

  return result;
}

## Problema 4: Encontrar el factorial de un númeroEscribe una función de JavaScript llamada factorial que tome un número entero positivo como parámetro y devuelva su factorial. El factorial de un número es el producto de todos los números enteros positivos menores o iguales a ese número. Por ejemplo, el factorial de 5 (escrito como 5!) es 5 _ 4 _ 3 _ 2 _ 1 = 120.

javascript
// Ejemplo de uso:
const valorFactorial = factorial(5)
console.log(valorFactorial) // Resultado: 120

## Problema 5: Verificar si una cadena es un palíndromoEscribe una función de JavaScript llamada isPalindrome que tome una cadena como parámetro y devuelva true si la cadena es un palíndromo (se lee igual de adelante hacia atrás que de atrás hacia adelante) y false en caso contrario.

javascript
// Ejemplo de uso:
console.log(isPalindrome('civic')) // Resultado: true
--
function isPalindrome(str) {
  const reversed = invertString(str);

  return (
    reversed.replace(" ", "").toLowerCase() ===
    str.replace(" ", "").toLowerCase()
  );
}
