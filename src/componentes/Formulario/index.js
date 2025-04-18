import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();

    props.aoColaboradorCadastrado({
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time,
    });
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do desenvolvedor.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
          placeholder="Digite seu nome"
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
          placeholder="Digite seu cargo"
        />
        <Campo
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <ListaSuspensa
          aoAlterar={(valor) => setTime(valor)}
          value={time}
          required={true}
          label="Time"
          itens={props.times}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form onSubmit={(evento) => {
        evento.preventDefault()
        props.cadastrarTime({nome: nomeTime, cor: corTime})}}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio={true}
          label="Nome do Time"
          valor={nomeTime}
          aoAlterar={(valor) => setNomeTime(valor)}
          placeholder="Digite o nome do time"
        />
        <Campo
          obrigatorio={true}
          label="Cor do Time"
          valor={corTime}
          aoAlterar={(valor) => setCorTime(valor)}
          placeholder="Digite a cor do time"
          type='color'
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
