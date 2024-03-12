function encontrarMaioresQue20(array) {
    const maioresQue20 = [];
    for (const numero of array) {
      if (numero > 20) {
        maioresQue20.push(numero);
      }
    }
    return maioresQue20;
  }
  
  const numeros = [9, 4, 5, 10, 2, 90, 8, 6, 33];
  const resultado = encontrarMaioresQue20(numeros);
  
  console.log(`Os números maiores que 20 são: ${resultado}`);
  