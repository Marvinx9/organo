import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista__suspensa">
      <label>{props.label}</label>
      <select
        className="select__input"
        onChange={(evento) => props.aoAlterar(evento.target.value)}
        value={props.value}
        required={props.required}
      >
        <option value="" disabled hidden data-default>
          <p>Selecione um item...</p>
        </option>
        {props.itens.map((item) => (
          (<option style={{color: '#000'}} key={item} >{item}</option>)
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
