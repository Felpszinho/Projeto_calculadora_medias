const form = document.getElementById('formulario');
const aprovado = '<img src="./imagens/aprovado.png" alt="emoji" />';
const reprovado = '<img src="./imagens/reprovado.png" alt="emojitriste" />';
const atividades = [];
const notas = [];
const notam = parseFloat(prompt("digite a nota minima"));
let linhas = '';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanRerovado = '<span class="resultado reprovado">Reprovado</span>';



form.addEventListener('submit', function (e) {
    e.preventDefault();
    addlinha();
    atualizatabela();
    atulizamediafinal();






});

function addlinha() {
    const inputNome = document.getElementById('nome');
    const inputAtividade = document.getElementById('nota');

    if (atividades.includes(inputNome.value)) {

        alert(`a atividade ${inputNome.value} ja foi inserida`);
    }
    else {

        atividades.push(parseFloat(inputNome.value));
        notas.push(parseFloat(inputAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputAtividade.value}</td>`;
        linha += `<td>${inputAtividade.value >= notam ? aprovado : reprovado}</td>`;

        linha += '</tr>';
        linhas += linha;

    }
    inputAtividade.value = '';
    inputNome.value = '';





}

function atualizatabela() {
    const corpoTAbela = document.querySelector('tbody');
    corpoTAbela.innerHTML = linhas;
}
function atulizamediafinal() {
    const mediafinal = calculamedia();
    document.getElementById('mediafinal').innerHTML = mediafinal;
    document.getElementById('resultado').innerHTML = mediafinal >= notam ? spanAprovado : spanRerovado;


}
function calculamedia() {

    let somanotas = 0;
    for (let i = 0; i < notas.length; i++) {
        somanotas += notas[i];
    }
    return somanotas / notas.length;


}