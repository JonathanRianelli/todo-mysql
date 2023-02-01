import { useState, useEffect } from "react"
import Axios from "axios";
import './App.scss';
import Itens from "./componentes/Itens"

export default function App() {

  const [tarefa, setTarefa] = useState()
  const [tarefas, setTarefas] = useState()


  const adicionar = () => {
    Axios.post('http://localhost:3001/adicionar', {
      nome: tarefa
    }).then((response) => {
      console.log(response)
    })
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/getTarefas").then((response) => {
      setTarefas(response.data)
    })
  })


  return (
    <main>
      <h1>ToDo</h1>

      <form onSubmit = {adicionar} className="add">
        <input type="text" name="nome" onChange={(e) => setTarefa(e.target.value)} />
        <button type="submit">Adicionar</button>
      </form>
      <div className='lista'>

        {typeof tarefas !== "undefined" && tarefas.map((value) => {
          return (

            <Itens id={value.idtarefas} nome={value.nome} completo={value.completo} />

          )
        })}

      </div>
    </main>
  )
}
