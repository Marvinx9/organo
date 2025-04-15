import "./Colaborador.css";
import { IoCloseCircle } from "react-icons/io5";

const Colaborador = ({ nome, imagem, cargo, corPrimaria, aoDeletar }) => {
  return (
    <div
      className="colaborador"
      style={{
        background: `linear-gradient(to bottom, ${corPrimaria} 50%, #ffffff 50%)`,
      }}
    >
      <IoCloseCircle size={25} className="deletar" onClick={aoDeletar} />
      <div className="cabecalho">
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
