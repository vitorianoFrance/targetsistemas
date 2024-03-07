console.log("5) Escreva um programa que inverta os caracteres de um string.");
console.log(" ");
console.log("RESPOSTA:");
console.log(" ");

function inverterString(stringParaInverter) {
  let inverterStr = "";
  for (let i = stringParaInverter.length - 1; i >= 0; i--) {
    inverterStr += stringParaInverter[i];
  }
  return inverterStr;
}

function inverterEImprimir() {
  let palavra = "Target Sistemas";
  let palavraInvertida = inverterString(palavra);

  console.log(
    "A palavra que será invertida é " +
      palavra +
      " que ficará dessa forma : '" +
      palavraInvertida +
      "'"
  );
}

inverterEImprimir();
