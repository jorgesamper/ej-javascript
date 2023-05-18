//## Problema 2: Convertir Fahrenheit a CelsiusEscribe una función de JavaScript llamada convertFToC que tome una temperatura en Fahrenheit como parámetro y devuelva la temperatura equivalente en Celsius.

//javascript
// Ejemplo de uso:
//const temperaturaCelsius = convertFToC(68)
//console.log(temperaturaCelsius) // Resultado: 20

function convertFToC(temperaturaFahrenheit) {
  const temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;
  return temperaturaCelsius;
}
