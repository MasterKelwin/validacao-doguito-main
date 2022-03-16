export function valida(input) {
    const tipoDeInput = input.dataset.tipo 

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    } 
    
    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })

    return mensagem;
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value);
    let mensagem = ''

    if(!maiorQue18(dataRecebida)) {
    mensagem = 'Você deve ser maior que 18 anos para se cadastrar.' 
    }

    input.setCustomValidity(mensagem);   
}

function maiorQue18(data) {
    const dataAtual = new Date();  //date() é automaticamente preenchido com a data atual
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataMais18 <= dataAtual;
}



const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio'
    },

    email: {
        valueMissing: 'O campo email não pode estar vazio',
        typeMismatch: 'O email não é válido'
    },

    senha: {
        valueMissing: 'O campo senha não pode estar vazio',
        patternMismatch: 'A senha deve conter entre 8 e 24 caracteres, deve conter pelo menos uma letra minúscula, uma maiúscula e um número'
    },

    dataNascimento: {
        valueMissing: 'O campo data de nascimento não pode estar vazio',
        customError: 'Você deve ser maior que 18 anos para se cadastrar'
    }
}

const tiposDeErro = [
    'badInput',
    'customError',
    'patternMismatch',
    'rangeOverflow',
    'rangeUnderflow',
    'stepMismatch',
    'tooLong',
    'tooShort',
    'typeMismatch',
    'valid',
    'valueMissing'
]