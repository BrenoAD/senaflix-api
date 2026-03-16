// Primeiro precisamos criar o app usando express 
const express = require("express")
const app = express()

//  Permitir aceitar JSON na requisição
app.use(express.json())

const filmes =[
    {
        id:1,
        title: "Carros",
        genre: "Animação",
        image: "https://www.cafecomfilme.com.br/media/k2/items/cache/e13ee4b62d3db96de4569a439ec6257c_L.jpg",
        sinopse:"Ao viajar para a Califórnia, o famoso carro de corridas Relâmpago McQueen se perde e vai parar em Radiator Springs, uma cidadezinha na Rota 66. Ele conhece novos amigos e aprende lições que mudam sua forma de encarar a vida.",
        anodelancamento: "2007",
    }
]

const series =[
    {
        id:1,
        title: "Phineas e Ferb",
        genre: "Animação",
        image: "https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@._V1_FMjpg_UX1000_.jpg",
        sinopse:"Phineas e Ferb são meio-irmãos criativos que, durante as férias de verão, constroem invenções mirabolantes e grandiosas no quintal. Enquanto tentam evitar que sua irmã mais velha, Candace, denuncie as criações para a mãe, seu ornitorrinco de estimação, Perry, age secretamente como um agente secreto contra o Dr. Doofenshmirtz",
        anodelancamento: "2006",
    }
]



app.post("/filmes", (req, res) => {
    const {title, genre, image, sinopse, anodelancamento} = req.body;

     if(!title || !genre || !image || !sinopse || !anodelancamento){
        return res.status(400).json({ erro: "Todos os campos sao obrigatórios"})
    }

    const novoFilme = {
        id: filmes.length + 1,
        title,
        genre,
        image,
        sinopse,
        anodelancamento
    };
    filmes.push(novoFilme);
    return res.status(201).json(novoFilme)
});

app.post("/series", (req, res) => {
    const {title, genre, image, sinopse, anodelancamento} = req.body;

    if(!title || !genre || !image || !sinopse || !anodelancamento){
        return res.status(400).json({ erro: "Todos os campos sao obrigatórios"})
    }

    const novoSeries = {
        id: series.length + 1,
        title,
        genre,
        image,
        sinopse,
        anodelancamento
    };
     series.push(novoSeries);
    return res.status(201).json(novoSeries)
});

//Filtrar por gênero
app.get("/filmes", function(req, res){
    const genre = req.query.genre

    if (!genre){
        return res.json(filmes)
    }
    const filmesFiltrados = filmes.filter(f => f.genre == genre)
    
    res.json(filmesFiltrados)
});

app.get("/filmes/:id", function(req, res){
    const id = req.params.id

    const filmesFiltrados = filmes.find(f => f.id == id)
    if (!filmes){
        return res.status(404).json({erro: "Filme não encontrado"})
    }
    
    
    res.json(filmesFiltrados)
});

app.get("/series", function(req, res){
    const genre = req.query.genre

    if (!genre){
        return res.json(series)
    }
    const seriesFiltradas = series.filter(s => s.genre == genre)
    
    res.json(seriesFiltradas)
});

app.get("/series/:id", function(req, res){
    const id = req.params.id
    const seriesFiltradas = series.find(s => s.id == id)
    if (!series){
        return res.status(404).json({erro: "Series não encontrado"})
    }
    
    return res.json(seriesFiltradas)
    
});


// Segundo passo, colocar o servidor para rodar
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
});