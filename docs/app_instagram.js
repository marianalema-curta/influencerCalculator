const categorias = [
    "Beauty", "Business and Careers", "Educational", "Fashion", "Finance & Accounting", "Fitness & Bodybuilding", "Football & Soccer", "Gastronomy", "Health & Medicine", "Video Gaming"
];

const valoresCategoria = {
    "Beauty": { "Macro": 1000, "Mega": 1500, "Mid": 700, "PostsMacro": 2700, "PostsMega": 3200, "PostsMid": 1500 },
    "Business and Careers": { "Macro": 1500, "Mega": 2000, "Mid": 1200, "PostsMacro": 3200, "PostsMega": 3700, "PostsMid": 2000 },
    "Educational": { "Macro": 1500, "Mega": 2000, "Mid": 1200, "PostsMacro": 3200, "PostsMega": 3700, "PostsMid": 2000 },
    "Fashion": { "Macro": 1800, "Mega": 2300, "Mid": 1500, "PostsMacro": 3500, "PostsMega": 4000, "PostsMid": 2300 },
    "Finance & Accounting": { "Macro": 1650, "Mega": 2150, "Mid": 1350, "PostsMacro": 3350, "PostsMega": 3850, "PostsMid": 2150 },
    "Fitness & Bodybuilding": { "Macro": 1000, "Mega": 1500, "Mid": 700, "PostsMacro": 2700, "PostsMega": 3200, "PostsMid": 1500 },
    "Football & Soccer": { "Macro": 900, "Mega": 1400, "Mid": 600, "PostsMacro": 2600, "PostsMega": 3100, "PostsMid": 1400 },
    "Gastronomy": { "Macro": 1000, "Mega": 1500, "Mid": 700, "PostsMacro": 2700, "PostsMega": 3200, "PostsMid": 1500 },
    "Health & Medicine": { "Macro": 1500, "Mega": 2000, "Mid": 1200, "PostsMacro": 3200, "PostsMega": 3700, "PostsMid": 2000 },
    "Video Gaming": { "Macro": 900, "Mega": 1400, "Mid": 600, "PostsMacro": 2600, "PostsMega": 3100, "PostsMid": 1400 }
};


function populateCategories() {
    const categoria1Select = document.getElementById('categoria1');

    categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria;
        categoria1Select.appendChild(option);
    });
}

function calcularValorInsta(event) {
    event.preventDefault();

    try {
        const seguidores = parseInt(document.getElementById('seguidores').value);
        const alcance = parseInt(document.getElementById('alcance').value);
        const engajamento = parseFloat(document.getElementById('engajamento').value);
        const publicoMenorIdade = document.getElementById('publicoMenorIdade').value;
        const categoria1 = document.getElementById('categoria1').value;

        if (isNaN(seguidores) || isNaN(alcance) || isNaN(engajamento) || !categoria1) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (engajamento > 100) {
            alert('O valor não pode ser maior que 100%.');
            return;
        }

        let tier;
        if (seguidores > 5000000) {
            tier = "Super";
        } else if (seguidores >= 1000000) {
            tier = "Mega";
        } else if (seguidores >= 100000) {
            tier = "Macro";
        } else {
            tier = "Mid";
        }

        let valorBase;
        if (tier === "Super") {
            valorBase = valoresCategoria[categoria1]["Mega"];
        } else {
            valorBase = valoresCategoria[categoria1][tier];
        }


        // Calculate Stories value
        let valorStories;
        if (tier === "Super") {
            valorStories = valorBase;
            document.getElementById('resultadoStories').textContent = `Valor Estimado Para Stories: $${valorStories}+ dol`;
        } else {
            const d = valorBase / 4;
            const minStories = (valorBase - d).toFixed(2);
            const maxStories = (valorBase + d).toFixed(2);
            document.getElementById('resultadoStories').textContent = `Valor Estimado Para Stories: $${minStories} - $${maxStories} dol`;
        }

        // Calculate Posts value
        let valorPosts;
        if (tier === "Super") {
            valorPosts = valoresCategoria[categoria1]["PostsMega"];
        } else {
            valorPosts = valoresCategoria[categoria1][`Posts${tier}`];
        }


        if (tier === "Super") {
            document.getElementById('resultadoPosts').textContent = `Valor Estimado Para Posts: $${valorPosts}+ dol`;
        } else {
            const d = valorPosts / 4;
            const minPosts = (valorPosts - d).toFixed(2);
            const maxPosts = (valorPosts + d).toFixed(2);
            document.getElementById('resultadoPosts').textContent = `Valor Estimado Para Posts: $${minPosts} - $${maxPosts} dol`;
        }

    } catch (error) {
        document.getElementById('resultadoStories').textContent = 'Erro: Verifique os valores inseridos.';
        document.getElementById('resultadoPosts').textContent = 'Erro: Verifique os valores inseridos.';
    }
}


document.addEventListener('DOMContentLoaded', populateCategories);
