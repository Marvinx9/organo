import "./Colaborador.css";

const Colaborador = ({ nome, imagem, cargo, corPrimaria }) => {
  return (
    <div
      className="colaborador"
      style={{
        background: `linear-gradient(to bottom, ${corPrimaria} 50%, #ffffff 50%)`,
      }}
    >
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
