function rolarDados() {
    const numDados = parseInt(document.getElementById("numDados").value);
    const lados = parseInt(document.getElementById("lados").value);
    const resultados = [];
    let total = 0;
  
    for (let i = 0; i < numDados; i++) {
      const resultado = Math.floor(Math.random() * lados) + 1;
      resultados.push(resultado);
      total += resultado;
    }
  
    alert(`Resultados: ${resultados.join(', ')}\nTotal: ${total}`);
  }