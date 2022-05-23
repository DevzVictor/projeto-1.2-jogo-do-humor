const nome = document.getElementById('nome')
const situacao = document.getElementById('situacao')
const imagem = document.querySelector('#imagem')
let btn = document.querySelector('#btn')

btn.addEventListener('click', () =>{
     if(btn.value == 'primeiro'){
        imagem.src = './assets/img/bilionario.png'
        nome.innerText = 'Tony'
        situacao.innerText = 'Bilionário'
        btn.value = 'segundo'
    } else if(btn.value == 'segundo') {
        imagem.src = './assets/img/playboy.png'
        nome.innerText = 'Tony Playboy'
        situacao.innerText = 'Playboy'
        btn.value = 'terceiro'
    } else if(btn.value == 'terceiro'){
        imagem.src = './assets/img/filantropo.png'
        nome.innerText = 'Sr. Stark ajudando os estudantes'
        situacao.innerText = 'Filantropo'
        btn.value = 'quarto'
    } else {
        imagem.src = './assets/img/genio.png'
        nome.innerText = 'Tony Stark'
        situacao.innerText = 'Genio'
        btn.value = 'primeiro'
    }
});