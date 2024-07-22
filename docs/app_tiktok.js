function calcularValorTiktok(event) {
    event.preventDefault();

    try {
        const seguidores = parseInt(document.getElementById('seguidores').value);
        const alcance = parseInt(document.getElementById('alcance').value);
        const engajamento = parseFloat(document.getElementById('engajamento').value);

        if (isNaN(seguidores) || isNaN(alcance) || isNaN(engajamento)) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (engajamento > 100) {
            alert('O engajamento não pode ser maior que 100%.');
            return;
        }

        let minValorTiktok, maxValorTiktok, valorTexto;

        if (seguidores < 200000) {
            if (alcance <= 20000) {
                minValorTiktok = 500;
                maxValorTiktok = 1000;
            } else if (alcance <= 50000) {
                minValorTiktok = 800;
                maxValorTiktok = 1000; // max 1k
            } else if (alcance <= 100000) {
                minValorTiktok = 1000;
                maxValorTiktok = 1500; // max 1k
            } else if (alcance <= 200000) {
                minValorTiktok = 1500;
                maxValorTiktok = 2000; // max 2k
            } else {
                minValorTiktok = 1500;
                maxValorTiktok = 2000; // max 2k
            } 
        } else if (seguidores >= 200000 && seguidores <= 3000000) {
            if (alcance <= 20000) {
                minValorTiktok = 500;
                maxValorTiktok = 1000;
            } else if (alcance <= 50000) {
                minValorTiktok = 800;
                maxValorTiktok = 1200;
            } else if (alcance <= 100000) {
                minValorTiktok = 1000;
                maxValorTiktok = 2000;
            } else if (alcance <= 200000) {
                minValorTiktok = 2000;
                maxValorTiktok = 3000;
            } else if (alcance <= 400000) {
                minValorTiktok = 2500;
                maxValorTiktok = 3500;
            } else if (alcance <= 500000) {
                minValorTiktok = 3500;
                maxValorTiktok = 4500;
            } else if (alcance <= 700000) {
                minValorTiktok = 6500;
                maxValorTiktok = 8500;
            } else if (alcance <= 1000000) {
                minValorTiktok = 9000;
                maxValorTiktok = 12000;
            } else if (alcance <= 2000000) {
                minValorTiktok = 12000;
                maxValorTiktok = 15000;
            } else if (alcance <= 3000000) {
                minValorTiktok = 15000;
                maxValorTiktok = 25000;
            } else {
                minValorTiktok = 30000;
                maxValorTiktok = "30000+";
            }
        } else { // seguidores > 3000000
            if (alcance <= 20000) {
                minValorTiktok = 1000;
                maxValorTiktok = 2000;
            } else if (alcance <= 50000) {
                minValorTiktok = 1600;
                maxValorTiktok = 2400;
            } else if (alcance <= 100000) {
                minValorTiktok = 2000;
                maxValorTiktok = 4000;
            } else if (alcance <= 200000) {
                minValorTiktok = 4000;
                maxValorTiktok = 6000;
            } else if (alcance <= 400000) {
                minValorTiktok = 5000;
                maxValorTiktok = 7000;
            } else if (alcance <= 500000) {
                minValorTiktok = 7000;
                maxValorTiktok = 9000;
            } else if (alcance <= 700000) {
                minValorTiktok = 13000;
                maxValorTiktok = 17000;
            } else if (alcance <= 1000000) {
                minValorTiktok = 18000;
                maxValorTiktok = 24000;
            } else if (alcance <= 2000000) {
                minValorTiktok = 24000;
                maxValorTiktok = 30000;
            } else if (alcance <= 3000000) {
                minValorTiktok = 30000;
                maxValorTiktok = 50000;
            } else {
                minValorTiktok = 60000;
                maxValorTiktok = "60000+";
            }
        }

        if (maxValorTiktok === "30000+" || maxValorTiktok === "60000+") {
            valorTexto = `$${minValorTiktok}+ dol`;
        } else {
            valorTexto = `$${minValorTiktok} - $${maxValorTiktok} dol`;
        }

        document.getElementById('resultado').textContent = `Valor Estimado Para TikTok: ${valorTexto}`;
    } catch (error) {
        document.getElementById('resultado').textContent = 'Erro: Verifique os valores inseridos.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Qualquer configuração inicial pode ser feita aqui
});
