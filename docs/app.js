const categorias = [
    "American Football", "Luxury", "Meditative Practices", "Sustainability", "Educational",
    "Children's Games & Toys", "Health & Medicine", "Religion", "Baseball", "Football & Soccer",
    "Finance & Accounting", "Literature", "Philanthropy & Charity", "Entertainment", "Business and Careers",
    "Modeling", "Politics", "Haircare", "Dance", "Social Issues", "Beauty", "Cooking", "Skin care",
    "Nail Care", "Volleyball", "Fashion", "Theater", "Fitness & Bodybuilding", "Film & Television",
    "Makeup", "Unboxings", "Parenting & Relationships", "Handicrafts", "Anime, Manga & Comics",
    "Technology & Gadgets", "Video Gaming", "Physics", "Cosplay", "Skateboarding", "Motorsports",
    "DIY Projects", "Automobiles", "Gardening", "Photography", "Space & Astronomy"
];

const valoresCategoria = {
    "American Football": 3392.41969,
    "Luxury": 2442.118126,
    "Meditative Practices": 2191.554737,
    "Sustainability": 1945.774615,
    "Educational": 1865.155662,
    "Children's Games & Toys": 1799.383789,
    "Health & Medicine": 1532.525596,
    "Religion": 1455.348048,
    "Baseball": 1390.188147,
    "Football & Soccer": 1253.511009,
    "Finance & Accounting": 1223.815404,
    "Literature": 1190.739312,
    "Philanthropy & Charity": 1171.793354,
    "Entertainment": 1041.896898,
    "Business and Careers": 1007.938777,
    "Modeling": 959.206668,
    "Politics": 931.643258,
    "Haircare": 915.105212,
    "Dance": 882.02912,
    "Social Issues": 826.9023,
    "Beauty": 757.8835214,
    "Cooking": 678.059886,
    "Skin care": 639.471112,
    "Nail Care": 573.318928,
    "Volleyball": 537.4527987,
    "Fashion": 512.679426,
    "Theater": 512.679426,
    "Fitness & Bodybuilding": 501.654062,
    "Film & Television": 429.989196,
    "Makeup": 418.963832,
    "Unboxings": 413.45115,
    "Parenting & Relationships": 389.4829679,
    "Handicrafts": 352.811648,
    "Anime, Manga & Comics": 342.349851,
    "Technology & Gadgets": 333.7154695,
    "Video Gaming": 303.19751,
    "Physics": 263.2183384,
    "Cosplay": 215.1599151,
    "Skateboarding": 185.7114186,
    "Motorsports": 143.329732,
    "DIY Projects": 110.25364,
    "Automobiles": 96.64397478,
    "Gardening": 93.08829489,
    "Photography": 93.08829489,
    "Space & Astronomy": 93.08829489
};

function populateCategories() {
    const categoria1Select = document.getElementById('categoria1');
    const categoria2Select = document.getElementById('categoria2');

    categorias.forEach(categoria => {
        const option1 = document.createElement('option');
        option1.value = categoria;
        option1.textContent = categoria;
        categoria1Select.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = categoria;
        option2.textContent = categoria;
        categoria2Select.appendChild(option2);
    });
}

function calcularValor() {
    const plataforma = document.getElementById('plataforma').value;

    if (plataforma === "instagram") {
        calcularValorInsta();
    } else if (plataforma === "tiktok") {
        calcularValorTiktok();
    } else if (plataforma === "youtube") {
        calcularCustoPorMencao();
    }
}

function calcularValorInsta() {
    
        const seguidores = parseInt(document.getElementById('seguidores').value);
        const alcance = parseInt(document.getElementById('alcance').value);
        const engajamento = parseFloat(document.getElementById('engajamento').value);
        const publicoMenorIdade = parseInt(document.getElementById('publicoMenorIdade').value);
        const categoria1 = document.getElementById('categoria1').value;
        const categoria2 = document.getElementById('categoria2').value;

        let valorBase = 0;

        if (seguidores <= 600000) {
            valorBase = (seguidores / 390) * (0.75 + (alcance / seguidores) * (0.75 + engajamento));
            if (valorBase < 120) {
                valorBase = 400;
            } else if (valorBase < 400) {
                valorBase = 500;
            } else if (valorBase > 800) {
                valorBase = 800;
            }
        } else if (seguidores >= 3500000) {
            valorBase = 10000;
            if (publicoMenorIdade > 50) {
                valorBase -= 4000;
            }
            valorBase += Math.max(valoresCategoria[categoria1], valoresCategoria[categoria2]);
            valorBase /= 2;
        } else {
            valorBase = Math.pow(0.2443 * seguidores, 0.6625) - 2000;
            if (valorBase >= 1000) {
                valorBase = 1000;
            }
            if (publicoMenorIdade > 50) {
                valorBase -= 400;
            }
        }

        let valorReels = 0;
        if (valorBase > 5000) { valorReels = 10000;}
    }
