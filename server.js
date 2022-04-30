const express = require('express');

const app = express()
let contadorDeVisitas = 0;

app.get('/', (req,res ) =>{
    contadorDeVisitas++
res.send('<h2 style="color:blue;"> hola sjakdjsa </h2>')

})

app.get('/visitas',(req,res) =>{
  
    res.send(`Esta pagina fue visitada ${contadorDeVisitas} veces`)


})

app.get('/FechaHora',(req,res) =>{
    res.send(`La fecha y hora actual es : ${new Date().toLocaleString()}`)
})


app.get('*', (req,res) =>{
    let { url } = req
    res.send(`<h2> La ruta ${url} no esta implementada </h2>`)
})


// ruta post 

app.post('/visitas',(req,res) =>{
  
    res.send(`<p style = "color = red; ">Esta pagina fue visitada ${contadorDeVisitas} veces </p>`)


})

app.post('/FechaHora',(req,res) =>{
    res.send(`<p style = "color = red; ">La fecha y hora actual es : ${new Date().toLocaleString()} </p>` )
})


app.post('*', (req,res) =>{
    let { url } = req
    res.send(`<h2  style = "color = red; "> La ruta ${url} no esta implementada </h2>`)
})







const PORT = 8080
app.listen(PORT,( ) =>console.log(` ${PORT}`))