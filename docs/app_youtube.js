function calcularCustoPorMencao(event) {
    event.preventDefault();

    try {
        const inscritos = parseInt(document.getElementById('inscritos').value);
        const visualizacoes = parseInt(document.getElementById('visualizacoes').value);
        const engajamento = parseFloat(document.getElementById('engajamento').value);

        if (isNaN(inscritos) || isNaN(visualizacoes) || isNaN(engajamento)) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (engajamento > 100) {
            alert('O engajamento não pode ser maior que 100%.');
            return;
        }

        let custoBase = 0;

        if (inscritos <= 100000) {
            custoBase = (inscritos / 1000) * (0.75 + (visualizacoes / inscritos) * (0.75 + engajamento));
            if (custoBase < 50) {
                custoBase = 100;
            } else if (custoBase < 100) {
                custoBase = 150;
            } else if (custoBase > 300) {
                custoBase = 300;
            }
        } else if (inscritos >= 1000000) {
            custoBase = 5000;
        } else {
            custoBase = Math.pow(0.123 * inscritos, 0.5) - 1000;
            if (custoBase >= 500) {
                custoBase = 500;
            }
        }

        let custoVideoDedicado = 0;
        if (custoBase > 2500) { custoVideoDedicado = 5000; }
        if (custoBase <= 2500) { custoVideoDedicado = 3000; }
        if (custoBase <= 2000) { custoVideoDedicado = 2500; }
        if (custoBase <= 1300) { custoVideoDedicado = 2000; }
        if (custoBase <= 800) { custoVideoDedicado = 1500; }
        if (custoBase <= 400) { custoVideoDedicado = 1000; }

        const d = custoBase / 4;
        const minMencao = (custoBase - d).toFixed(2);
        const maxMencao = (custoBase + d).toFixed(2);

        const e = custoVideoDedicado / 4;
        const minVideoDedicado = (custoVideoDedicado - e).toFixed(2);
        const maxVideoDedicado = (custoVideoDedicado + e).toFixed(2);

        document.getElementById('resultadoCustoMencao').textContent = `Custo Estimado por Menção: $${minMencao} - $${maxMencao} dol`;
        document.getElementById('resultadoVideoDedicado').textContent = `Valor Estimado para Vídeo Dedicado: $${minVideoDedicado} - $${maxVideoDedicado} dol`;
    } catch (error) {
        document.getElementById('resultadoCustoMencao').textContent = 'Erro: Verifique os valores inseridos.';
        document.getElementById('resultadoVideoDedicado').textContent = 'Erro: Verifique os valores inseridos.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Qualquer configuração inicial pode ser feita aqui
});
