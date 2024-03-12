// Função para encontrar números pares em um array
function encontrarPares(array) {
    // Filtrar o array para incluir apenas números pares
    const pares = array.filter(numero => numero % 2 === 0);
    
    // Retornar a lista de números pares
    return pares;
  }
  
  // Array de valores
  const valores = [2, 4, 3, 1, 6, 7, 9];
  
  // Chamar a função e exibir os resultados
  const numerosPares = encontrarPares(valores);
  console.log("Números pares: ", numerosPares);
  