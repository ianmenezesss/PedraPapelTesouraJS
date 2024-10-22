const escolha = ['pedra','papel','tesoura']

const displayJogador = document.getElementById('displayJogador')
const displayPC = document.getElementById('displayPC')
const displayResultado = document.getElementById('displayResultado')

const displayPlacarJogador = document.getElementById('displayPlacarJogador')
const displayPlacarPC = document.getElementById('displayPlacarPC')

let placarPC = 0
let placarJogador = 0

function jogar(jogadaJogador) {
    const jogadaPc = escolha[Math.floor(Math.random() * 3)]
    let resultado = ''

    
    if(jogadaJogador === jogadaPc){
        resultado = 'Empate'
    }else{
        switch(jogadaJogador){
            case 'pedra':
                resultado = (jogadaPc === 'tesoura') ? 'Jogador Venceu!' : 'Computador Venceu!'
                break
            case 'papel':
                resultado = (jogadaPc === 'pedra') ? 'Jogador Venceu!' : 'Computador Venceu!'
                break
            case 'tesoura':
                resultado = (jogadaPc === 'papel') ? 'Jogador Venceu!' : 'Computador Venceu!'
                break
        }
    }

    displayJogador.textContent = `Jogador: ${jogadaJogador}`
    displayPC.textContent = `Computador: ${jogadaPc}`

    if(resultado === 'Jogador Venceu!'){
        displayResultado.classList.remove('derrota')
        displayResultado.classList.add('vitoria')
        placarJogador += 1
    }

    if(resultado === 'Computador Venceu!'){
        displayResultado.classList.remove('vitoria')
        displayResultado.classList.add('derrota')
        placarPC += 1
    }
    if(resultado === 'Empate'){
        displayResultado.classList.remove('vitoria')
        displayResultado.classList.remove('derrota')
    }

    displayResultado.textContent = resultado
    displayPlacarJogador.textContent = placarJogador
    displayPlacarPC.textContent = placarPC

}

