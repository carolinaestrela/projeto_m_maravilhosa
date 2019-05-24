const box = document.querySelector('.maravilhosas__box');
const button = document.querySelector(".button");

button.addEventListener("click", (evento) => {


    const nome = document.querySelector(".title").value
    const img = document.querySelector(".imagem").value

    fetch('http://localhost:5001/maravilhosas/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': nome,
            'metadata': {
                'image': {
                    'url': img,
                }
            },
        })

    })
})
fetch('http://localhost:5001/maravilhosas/')

    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.content.forEach((mulher) => {

            let perfil = document.createElement('div');
            perfil.setAttribute('class', 'maravilhosas__perfil');
            box.appendChild(perfil);

            let link = document.createElement('a');
            link.setAttribute('href', '#');
            perfil.appendChild(link);

            let imagem = document.createElement('img');
            imagem.setAttribute('class', 'img-responsive');
            if (mulher.metadata && mulher.metadata.image) {
                imagem.setAttribute('src', mulher.metadata.image.url);
            } else {
                imagem.setAttribute('src', 'img/img-mulher.png');
            }
            link.appendChild(imagem);

            let nome = document.createElement('p');
            nome.innerHTML = mulher.title;
            link.appendChild(nome);

            let botao=Document.createElement('button');
            botao.setAttribute('content-id',mulher.id);
            botao.textContent= 'x';
            perfil.append(botao);

            botao.addEventListener('click', ()=>{
                let thisCard = botao.parentElement;
                let cardPai = thisCard.parentElement;

                fetch()

            }

        })
    })
    .catch((erro) => {
        console.log(erro);
    })
