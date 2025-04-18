import "./Campo.css";

const Campo = (props) => {
  const aoDigitar = (evento) => {
    props.aoAlterar(evento.target.value);
  };

  return (
    <div className={`campo campo-${props.type}`}>
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitar}
        required={props.obrigatorio}
        placeholder={props.placeholder}
        type={props.type ?? 'text'}
      />
    </div>
  );
};

export default Campo;
