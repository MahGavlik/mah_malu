function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    cartao.addEventListener('click', viraCartao);
    container.appendChild(cartao);
}

// Função para gerar cartões de países e capitais
function gerarQuizPaisesCapitais() {
    const paisesCapitais = [
        { pais: 'Brasil', capital: 'Brasília' },
        { pais: 'Argentina', capital: 'Buenos Aires' },
        { pais: 'França', capital: 'Paris' },
        { pais: 'Alemanha', capital: 'Berlim' },
        { pais: 'Estados Unidos', capital: 'Washington, D.C.' },
        { pais: 'Japão', capital: 'Tóquio' },
        { pais: 'Reino Unido', capital: 'Londres' },
        { pais: 'Itália', capital: 'Roma' },
        { pais: 'Canadá', capital: 'Ottawa' },
        { pais: 'Austrália', capital: 'Canberra' }
    ];

    paisesCapitais.forEach(item => {
        criaCartao('Geografia', `Qual é a capital de ${item.pais}?`, item.capital);
    });
}

// Chama a função para gerar os cartões ao carregar a página
gerarQuizPaisesCapitais();
