//## Problema 5: Verificar si una cadena es un palíndromoEscribe una función de JavaScript llamada isPalindrome que tome una cadena como parámetro y devuelva true si la cadena es un palíndromo (se lee igual de adelante hacia atrás que de atrás hacia adelante) y false en caso contrario.

//javascript
// Ejemplo de uso:
//console.log(isPalindrome('civic')) // Resultado: true

function isPalindrome(str) {
  const reversed = invertString(str);

  return (
    reversed.replace(" ", "").toLowerCase() ===
    str.replace(" ", "").toLowerCase()
  );
}
