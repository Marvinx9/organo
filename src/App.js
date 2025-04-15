import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
  const [times, setTimes] = useState([
    { nome: "Front-End", corPrimaria: "#82CFFA", corSecundaria: "#D9F7E9" },
    { nome: "Back-End", corPrimaria: "#57C278", corSecundaria: "#E8F8FF" },
    { nome: "Full-Stack", corPrimaria: "#A6D157", corSecundaria: "#F0F8E2" },
    { nome: "DevOps", corPrimaria: "#E06B69", corSecundaria: "#FDE7E8" },
    { nome: "Designer & UX", corPrimaria: "#DB6EBF", corSecundaria: "#FAE9F5" },
    { nome: "Mobile", corPrimaria: "#FFBA05", corSecundaria: "#FFF5D9" },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador() {
    console.log("deletando");
  }

  function mudarCorTime(cor, nome) {
    setTimes(
      times.map((time) => {
        if (time.nome === nome) {
          time.corSecundaria = cor;
        }
        return time;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          nome={time.nome}
          key={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorTime}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
