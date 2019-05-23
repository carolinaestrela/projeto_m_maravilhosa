const box= document.querySelector('.maravilhosas__box');
const button=document.getElementById("submit");

button.addEventListener("click", (evento) =>{
evento.preventDefault();

const nome=document.getElementById("title").value
const img=document.getElementById("imagem").value
 
fetch('http://localhost:5001/maravilhosas/',{
    method:'POST',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    'title': nome,
    
    })
})
.then((response) => {
    return response.json();
})
.then((data)=>{
    data.content.forEach((mulher) =>{

        let perfil  = document.createElement('div');
        perfil.setAttribute('class','maravilhosas__perfil');
        box.appendChild(perfil);

        let link = document.createElement('a');
        link.setAttribute ('href', '#');
        perfil.appendChild(link);

        let imagem =document.createElement('img');
        imagem.setAttribute('class', 'img-responsive');
        if (mulher.metadata && mulher.metadata.image){
            imagem.setAttribute('src', mulher.metadata.image.url); 
        }else{ 
            imagem.setAttribute('src', 'img/img-mulher.png');
        }
        link.appendChild(imagem);

        let nome=document.createElement('p');
        nome.innerHTML= mulher.title;
        link.appendChild(nome);

    })
})
.catch((erro)=>{
    console.log(erro);
    })
})