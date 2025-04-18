import "./Colaborador.css";
import { IoCloseCircle, IoHeartSharp, IoHeartOutline } from "react-icons/io5";

const Colaborador = ({ nome, id, imagem, cargo, corPrimaria, aoDeletar, favorito, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(id)
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar
  }

  return (
    <div
      className="colaborador"
      style={{
        background: `linear-gradient(to bottom, ${corPrimaria} 50%, #ffffff 50%)`,
      }}
    >
      <IoCloseCircle size={25} className="deletar" onClick={() => aoDeletar(id)} />
      <div className="cabecalho">
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">
          {favorito ? <IoHeartSharp {...propsFavorito} color="#ff0000" /> : <IoHeartOutline {...propsFavorito} />}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
  