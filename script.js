// Interatividade de Rolagem do Botão Principal
document.getElementById('cta-btn').addEventListener('click', () => {
    document.getElementById('specs').scrollIntoView({ behavior: 'smooth' });
});

// Simulador Dinâmico de Tempo de Volta
// Um tempo real de um GT3 RS em Interlagos varia na casa de 1:36.xxx a 1:41.xxx
document.getElementById('lap-btn').addEventListener('click', () => {
    const resultDisplay = document.getElementById('lap-result');
    
    // Altera o estado do texto temporariamente para dar sensação de processamento
    resultDisplay.innerText = "PILOTANDO...";
    resultDisplay.style.color = "#ffffff";

    setTimeout(() => {
        const minutes = 1;
        // Gera segundos aleatórios entre 36 e 41
        const seconds = Math.floor(Math.random() * (41 - 36 + 1)) + 36;
        // Gera milissegundos aleatórios entre 0 e 999
        const milliseconds = Math.floor(Math.random() * 1000);

        // Formata os números para manter as casas decimais corretas (ex: 02 ao invés de 2)
        const formattedSeconds = seconds.toString().padStart(2, '0');
        const formattedMillis = milliseconds.toString().padStart(3, '0');

        // Exibe o tempo gerado na cor padrão do projeto
        resultDisplay.innerText = `${minutes}:${formattedSeconds}.${formattedMillis}`;
        resultDisplay.style.color = "#e3001b";
    }, 700); // Aguarda 700 milissegundos antes de exibir o resultado
});
