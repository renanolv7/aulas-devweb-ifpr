
const my_element = document.querySelector('p');

my_element.addEventListener('click', updateName);

function updateName() {
    let nome = prompt('Digite novo nome: ');
    my_element.textContent = 'Nome da Pessoa: ' + nome;
}
