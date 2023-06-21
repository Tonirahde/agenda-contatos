const form = document.getElementById('form-agenda');
const contato = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroCelular = document.getElementById('numero-celular');

    if (contato.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi inserido.`);
    } else {
        contato.push(inputNomeContato.value);
        numero.push(parseFloat(inputNumeroCelular.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroCelular.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNomeContato.value = '';
        inputNumeroCelular.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
