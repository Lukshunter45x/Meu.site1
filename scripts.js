// Calcular e exibir o total de gastos mensais
function calcularTotalGastos() {
    let gastosList = document.getElementById('gastos-list');
    let items = gastosList.getElementsByTagName('li');
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        let input = items[i].querySelector('input');
        let valor = parseFloat(input.value);
        total += valor;
    }

    let totalGastosElement = document.getElementById('total-gastos');
    totalGastosElement.textContent = formatarMoeda(total);

    return total;
}

// Calcular e exibir o total de investimentos mensais
function calcularTotalInvestimentos() {
    let investimentosList = document.getElementById('investimentos-list');
    let items = investimentosList.getElementsByTagName('li');
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        let input = items[i].querySelector('input');
        let valor = parseFloat(input.value);
        total += valor;
    }

    let totalInvestimentosElement = document.getElementById('total-investimentos');
    totalInvestimentosElement.textContent = formatarMoeda(total);

    return total;
}

// Calcular e exibir o total geral (gastos + investimentos)
function calcularTotalGeral() {
    let totalGastos = calcularTotalGastos();
    let totalInvestimentos = calcularTotalInvestimentos();
    let totalGeral = totalGastos + totalInvestimentos;

    let totalGeralValorElement = document.getElementById('total-geral-valor');
    totalGeralValorElement.textContent = formatarMoeda(totalGeral);
}

// Formatar número para moeda (R$) com duas casas decimais
function formatarMoeda(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

// Chamar a função calcularTotalGeral ao clicar no botão
let btnCalcularTotal = document.getElementById('btn-calcular-total');
btnCalcularTotal.addEventListener('click', calcularTotalGeral);

// Atualizar totais ao editar valores nos inputs
let editInputs = document.getElementsByClassName('edit-input');
for (let i = 0; i < editInputs.length; i++) {
    editInputs[i].addEventListener('input', function() {
        calcularTotalGeral();
    });
}
