// function verifica(num) {
//     var num = parseInt(prompt("Digite um número inteiro:"));

//     if (num % 2 === 0) {
//       return "É par.";
//     } else {
//       return "É ímpar.";
//     }
//   }

//   console.log(verifica());
  

//   function verificarNum(num) {

//     var num = parseInt(prompt("Digite um número:"));

//     if (num > 0) {
//       return "É positivo.";
//     } else if (num < 0) {
//       return "É negativo.";
//     } else {
//       return "É zero.";
//     }
// //   }

//   console.log(verificarNum());

//   function verificarDiv() {

//   var num1 = parseInt(prompt("Digite o primeiro número:"));
//   var num2 = parseInt(prompt("Digite o segundo número:"));
//   if (num1 % num2 === 0) {
//     return "O primeiro número é divisível pelo segundo número.";
//   } else {
//     return "O primeiro número não é divisível pelo segundo número.";
//   }
// }

// console.log(verificarDiv());

// function imprimirPares() {
//     var num = parseInt(prompt("Digite um número inteiro positivo:"));
  
//     if (num >= 0) {
//       console.log("Todos os número pares de 0 até " + num + ":");
  
//       for (var i = 0; i <= num; i++) {
//         if (i % 2 === 0) {
//           console.log(i);
//         }
//       }
//     } else {
//       console.log("O número inserido não é válido.");
//     }
//   }
  
//   imprimirPares();

// function converte() {
//     var celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
  
//     var fahr = (celsius * 9/5) + 32;
  
//     return fahr;
//   }
  
//   var F = converte();
//   console.log("A temperatura em Fahrenheit é: " + F + " °F");

function fatorial() {
    var num = parseInt(prompt("Digite um número:"));
  
    if (num >= 0) {
      var fatorial = 1;
  
      for (var i = 1; i <= num; i++) {
        fatorial *= i;
      }
  
      return fatorial;
    } else {
      return "O número inserido não é válido.";
    }
  }
  
  var resultado = fatorial();
  console.log("O fatorial é: " + resultado);
  
  
  


