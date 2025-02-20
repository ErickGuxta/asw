//CLASSE ANIMAL
class Animal {
    #nome;
    #cor;

    constructor(nome, cor) {
        this.#nome = nome;
        this.#cor = cor;
    }

    getNome() {
        return this.#nome;
    }
    
    getCor() {
        return this.#cor;
    }

    fazerSom() {
        return "Som genérico";
    }

    mover() {
        return "Movimento genérico";
    }

    getSom() {
        return "som_generico.mp3"; 
    }
}

// ANIMAIS ESPECÍFICOS
class Cachorro extends Animal {
    fazerSom() {
        return "Au au!";
    }

    mover() {
        return "O cachorro está correndo!";
    }

    getSom() {
        return "audios/somcachorro.mp3"; 
    }
}

class Gato extends Animal {
    fazerSom() {
        return "Miau!";
    }

    mover() {
        return "O gato está saltando!";
    }

    getSom() {
        return "audios/sommiau.mp3"; 
    }
}

class Passaro extends Animal {
    fazerSom() {
        return "Piu piu!";
    }

    mover() {
        return "O pássaro está voando!";
    }

    getSom() {
        return "audios/sompassaro.mp3"; 
    }
}

class Peixe extends Animal {
    fazerSom() {
        return "Peixes não fazem som!";
    }

    mover() {
        return "O peixe está nadando!";
    }
}

class Cavalo extends Animal {
    fazerSom() {
        return "Relincho!";
    }

    mover() {
        return "O cavalo está galopando!";
    }

    getSom() {
        return "audios/somcavalo.mp3"; 
    }
}

//LOGICA DOS STEPS
let animalAtual = 'cachorro';
let stepAtual = 1;
let tipoAnimalSelecionado = 'cachorro';

// atualizar os steps
function atualizarSteps(stepAtivo) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        if (index + 1 === stepAtivo) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}


// navegação steps
function irParaStep2() {
    tipoAnimalSelecionado = document.getElementById('animalType').value;

    // Atualiza a imagem do animal no sidebar
    const sidebarAnimalImage = document.getElementById('sidebarAnimalImage');
    sidebarAnimalImage.src = `img/${tipoAnimalSelecionado}.png`;

    const step1 = document.querySelector('.step1');
    step1.innerHTML = `
        <div class="form-title">Customize seu animal</div>
        <div class="form-subtitle">Entre com as informações para começar:</div>
        
        <form class="form-customize">
            <input type="text" id="nomeAnimal" placeholder="Nome">
            <div class="color-animal">
                <label>Qual a cor do animal?</label>
                <input type="color" id="corAnimal">
            </div>
        </form>

        <div class="buttons">
            <button type="button" class="button-back" onclick="voltarParaStep1()">Voltar</button>
            <button type="button" class="button-next" onclick="irParaStep3()">Próximo</button>
        </div>
    `;

    atualizarSteps(2);
}

function voltarParaStep1() {
    const step1 = document.querySelector('.step1');
    step1.innerHTML = `
        <div class="form-title">Dados do Animal</div>
        <div class="form-subtitle">Entre com as informações para começar:</div>

        <select name="animals" id="animalType" class="selectionAnimals">
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
            <option value="passaro">Pássaro</option>
            <option value="peixe">Peixe</option>
            <option value="cavalo">Cavalo</option>
        </select>
        <button type="button" class="button-next" onclick="irParaStep2()">Próximo</button>
    `;

    // para voltar com o animal selecionado
    document.getElementById('animalType').value = tipoAnimalSelecionado;

    atualizarSteps(1);
}

function irParaStep3() {
    const nome = document.getElementById('nomeAnimal').value;
    const cor = document.getElementById('corAnimal').value;

    // validação
    if (!nome) {
        alert('Por favor, digite um nome para o animal!');
        return;
    }

    // instanciando os animais
    switch (tipoAnimalSelecionado) {
        case 'cachorro':
            animalAtual = new Cachorro(nome, cor);
            break;
        case 'gato':
            animalAtual = new Gato(nome, cor);
            break;
        case 'passaro':
            animalAtual = new Passaro(nome, cor);
            break;
        case 'peixe':
            animalAtual = new Peixe(nome, cor);
            break;
        case 'cavalo':
            animalAtual = new Cavalo(nome, cor);
            break;
    }

    const step1 = document.querySelector('.step1');
    step1.innerHTML = `
        <div class="form-title">Seu animal:</div>
        <div class="name-animal">
            <h3>Nome do ${tipoAnimalSelecionado}: ${animalAtual.getNome()}</h3>
            <h3>Cor: <span style="color: ${animalAtual.getCor()}">${animalAtual.getCor()}</span></h3>
        </div>
        <div class="buttons">
            <button type="button" class="button-sound" onclick="fazerSomAnimal()">Fazer som</button>
            <button type="button" class="button-move" onclick="moverAnimal()">Mover</button>
        </div>
        <button type="button" class="button-start-over" onclick="voltarParaStep1()">Recomeçar</button>
    `;

    atualizarSteps(3);
}

// funções de som e mover
function fazerSomAnimal() {
    if (animalAtual) {
        const audio = new Audio(animalAtual.getSom());
        audio.play(); 
    }
}

function moverAnimal() {
    if (animalAtual) {
        alert(animalAtual.mover());
    }
}

