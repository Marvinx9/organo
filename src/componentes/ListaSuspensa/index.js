import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista__suspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterar(evento.target.value)}
        value={props.value}
        required={props.required}
      >
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
