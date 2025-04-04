import React, { useState } from "react"
import { FaTrash, FaPen } from 'react-icons/fa';
import { BsCheckLg } from 'react-icons/bs';
import axios from "axios";
import "./Itens.scss"

export default function Card(props) {

    const [aberto, setAberto] = useState(false)
    const [novoNome, setNovoNome] = useState()

    const ativar = (marcado) => {
        if (marcado === 0) {
            axios.put("http://localhost:3001/marcar", {
                id: props.id
            })
        } else {
            axios.put("http://localhost:3001/desmarcar", {
                id: props.id
            })
        }
    }

    const abrirEditar = () => {
        setAberto(true)
    }

    const fecharEditar = () => {
        setAberto(false)
    }

    const editar = () => {
        axios.put("http://localhost:3001/editar", {
            id: props.id,
            nome: novoNome
        })

        fecharEditar()
    }

    const excluir = () => {
        axios.delete(`http://localhost:3001/excluir/${props.id}`)

        document.location.reload()
    }

    return (
        <div>
            <div className={"item" + (props.completo === 1 ? ' marcado' : '')} key={props.id}>
                <button className="ativar" onClick={() => ativar(props.completo)} ><BsCheckLg /></button>

                <p>{props.nome}</p>

                <div className='editar-excluir'>
                    <button onClick={() => abrirEditar()} ><FaPen /></button>
                    <button onClick={() => excluir()}><FaTrash /></button>
                </div>
            </div>

            <div className={"editar-container" + (aberto ? ' aberto' : '')}>
                <div className="editar-box">
                    <input type="text" name="nome" defaultValue={props.nome} onChange={(e) => setNovoNome(e.target.value)} />
                    
                    <div className="botoes">
                        <button onClick={() => fecharEditar()}>Cancelar</button>
                        <button onClick={() => editar()}>Editar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}