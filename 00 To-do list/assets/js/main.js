'use strict';

let banco = [];

// armazenar em constante array function que retorna os valores da chave 'todoList'
const getBanco = () => JSON.parse(localStorage.getItem ('todoList')) ?? [];

// armazenar em constante array function que define um valor da chave 'tarefa' do nosso 'todoList'
const setBanco = (banco) => localStorage.setItem ('todoList', JSON.stringify(banco));

// CRIAR ITEM NA NOSSA LISTAGEM DE TAREFAS
const criarItem = (tarefa, status, indice) => {
    //criar label
    const item = document.createElement('label');

    //adicionar class 'todo-item' ao label
    item.classList.add('todo-item');

    //definir no conteudo do label input checkbox div com texto da tarefa e input button
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `;
    //definir o novo item como FILHO do todoList(div)
    document.getElementById('todoList').appendChild(item);
}

// LIMPAR TAREFAS
// para evitar insercao duplicada da lista quando chamamos a funcao atualizarTela()
const limparTarefas = () => {
    //elemento todoList que é a nossa lista
    const todoList = document.getElementById('todoList');

    //enquanto todoList tiver um primeiro filho
    //remova o ultimo filho que foi adicionada ao todoList
    //lembrando que a lista é readicionada a cada nova insercao
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

// ATUALIZAR TELA, limpar tela, pegar o 'banco' e criarItem atualizando assim a lista de tarefas
const atualizarTela = () => {
    limparTarefas();
    const banco = getBanco(); 
    banco.forEach ( (item, indice) => criarItem (item.tarefa, item.status, indice));
}

// INSERIR ITEM NA LISTA DE TAREFAS apos teclar Enter
const inserirItem = (evento) => {

    //pegar evento teclar e armazenar na constante tecla
    const tecla = evento.key;
    //pegar o valor (nome) da tecla que foi pressionada (alvo do evento)
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        const banco = getBanco();

        //faca um push (adicione) de chave/valor da tarefa e status
        banco.push ({'tarefa': texto, 'status': ''});
        //coloque a chave/valor no banco
        setBanco(banco);
        atualizarTela();
        //limpe o value do evento da ultima tarefa digitada no input
        evento.target.value = '';
    }
}

// REMOVER ITEM por indice
const removerItem = (indice) => {
    const banco = getBanco();
    //faca um splice (corte) no seu banco (que eh um array) do indice; so uma posicao
    banco.splice (indice, 1);
    //set do splice no seu banco, permitir a persistencia dos dados
    setBanco(banco);
    atualizarTela();
}

// ATUALIZAR ITEM ou ALTERAR status para checked ou tirar checked (checkbox)
const atualizarItem = (indice) => {
    const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco(banco);
    atualizarTela();
}

// O QUE FAZER QUANDO CLICAR EM UMA TAREFA, por meio do click (evento)
const clickItem = (evento) => {

    //selecionar o elemento (tarefa) e pegar o evento relativo a ele
    const elemento = evento.target;
    //se for um click no botao 'X' iremos remover a tarefa da listagem
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem (indice);
        //se for um click no botao checkbox iremos definir como checado ou ao contrario
    }else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem (indice);
    }
}

// adicionar ESCUTADOR de eventos de tecla PRESSIONADA e de CLICK
document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();