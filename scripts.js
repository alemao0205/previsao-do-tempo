let chave = 'cebcd482eda57fa9a6714c1c2ba91885';

function colocarNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + '.png';
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";

      // Limpar o texto do input
      document.querySelector('#input-cidade').value = '';
}

async function buscarCidade(cidade) {
    try {
        let resposta = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + '&appid=' + chave + '&units=metric');
        let dados = await resposta.json();
        colocarNaTela(dados);
    } catch (error) {
        console.error("Erro ao buscar cidade:", error);
    }
}
function cliqueNoBotao() {
    let cidade = document.querySelector('#input-cidade').value;
    buscarCidade(cidade);
}
document.querySelector('#input-cidade').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        cliqueNoBotao();
    }
});