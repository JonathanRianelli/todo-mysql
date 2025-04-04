const express = require("express")
const app = express()
const mysql = require("mysql2")
const cors = require("cors")
require('dotenv').config(); // Carrega as variáveis do .env


const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',     
    password: process.env.DB_PASSWORD,        
    database: process.env.DB_DATABASE || 'todo', 
});


app.use(cors())
app.use(express.json())

app.post("/adicionar", (req,res)=>{
    const {nome} = req.body

    let sql = "insert into tarefas (nome, completo) values (?, ?)"

    db.query(sql, [nome, 0], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.get("/getTarefas", (req, res)=>{

    let sql = "select * from tarefas"

    db.query(sql, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.put("/editar", (req, res) => {
    const { id } = req.body
    const { nome } = req.body

    let sql = "update tarefas set nome = ? where idtarefas = ?"

    db.query(sql, [nome, id], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.put("/marcar", (req, res) => {
    const { id } = req.body

    let sql = "update tarefas set completo = ? where idtarefas = ?"

    db.query(sql, [1, id], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.put("/desmarcar", (req, res) => {
    const { id } = req.body

    let sql = "update tarefas set completo = ? where idtarefas = ?"

    db.query(sql, [0, id], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

app.delete("/excluir/:id", (req, res)=>{
    const { id } = req.params

    let sql = "delete from tarefas where idtarefas=?"

    db.query(sql, [id], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})



app.listen(3001, () => {
    console.log("Rodando servidor")
})