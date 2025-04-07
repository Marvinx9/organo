import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const times = [
    "Front-End",
    "Back-End",
    "Full-Stack",
    "DevOps",
    "Designer & UX",
    "Mobile",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do desenvolvedor.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          value={nome}
          aoAlterar={(valor) => setNome(valor)}
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <ListaSuspensa
          aoAlterar={(valor) => setTime(valor)}
          value={time}
          obrigatorio={true}
          label="Time"
          itens={times}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
