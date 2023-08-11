// Obtenemos el elemento con la clase 'calculator__output'
let output = document.querySelector('.calculator__output');

// Cadena para almacenar la expresión matemática
let expression = '';

// Función para agregar números y operadores a la expresión
const append = (value) => {
  expression += value;
  output.textContent = expression;
};

// Función para eliminar el último carácter de la expresión
const deleteLast = () => {
  expression = expression.slice(0, -1);
  output.textContent = expression;
};

// Función para limpiar el div y la expresión
const clearOutput = () => {
  expression = '';
  output.textContent = '0';
};

// Función para calcular el resultado
const calculate = () => {
  try {
    // Usamos la función eval() para evaluar la expresión
    const result = eval(expression);
    expression = result.toString();
    output.textContent = expression;
  } catch (error) {
    // Si hay un error en la expresión, mostramos "Error" en el output
    output.textContent = 'Error';
  }
};

// Obtenemos todos los elementos con clase 'btn'
const buttons = document.querySelectorAll('.btn');

// Iteramos sobre los botones y agregamos eventos de clic
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    // Determinamos qué función ejecutar en función del texto del botón
    switch (buttonText) {
      case 'CL':
        clearOutput();
        break;
      case 'DEL':
        deleteLast();
        break;
      case '=':
        calculate();
        break;
      default:
        append(buttonText);
    }
  });
});
