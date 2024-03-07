function sequenciaFibonacci() {
    let numLimite = 100,
      num1 = 0,
      num2 = 1;
  
    while (num1 < numLimite) {
      console.log("O valor atual da sequência de Fibonacci é " + num1);
      let proximoNumero = num1 + num2;
      num1 = num2;
      num2 = proximoNumero;
    }
  }
  
  sequenciaFibonacci();
  