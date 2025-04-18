import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
  const [times, setTimes] = useState([
    { id: 1, nome: "Front-End",cor: "#D9F7E9" },
    { id: 2, nome: "Back-End",cor: "#E8F8FF" },
    { id: 3, nome: "Full-Stack",cor: "#F0F8E2" },
    { id: 4, nome: "DevOps",cor: "#FDE7E8" },
    { id: 5, nome: "Designer & UX",cor: "#FAE9F5" },
    { id: 6, nome: "Mobile",cor: "#FFF5D9" },
  ]);

  const colaborador = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Afrânio Dantas',
      imagem: 'https://github.com/Marvinx9.png',
      cargo: 'dev Júnior',
      time: 'Front-End'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Breno Alves',
      imagem: 'https://github.com/BrenoRev.png',
      cargo: 'dev Júnior',
      time: 'Front-End'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Evanildo Silva',
      imagem: 'https://github.com/evanildo-silva.png',
      cargo: 'dev Júnior',
      time: 'Front-End'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Evanildo Silva',
      imagem: 'https://github.com/evanildo-silva.png',
      cargo: 'dev Júnior',
      time: 'Full-Stack'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Evanildo Silva',
      imagem: 'https://github.com/evanildo-silva.png',
      cargo: 'dev Júnior',
      time: 'DevOps'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Evanildo Silva',
      imagem: 'https://github.com/evanildo-silva.png',
      cargo: 'dev Júnior',
      time: 'Mobile'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Afrânio Dantas',
      imagem: 'https://github.com/Marvinx9.png',
      cargo: 'dev Júnior',
      time: 'Full-Stack'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Breno Alves',
      imagem: 'https://github.com/BrenoRev.png',
      cargo: 'dev Júnior',
      time: 'Full-Stack'
    },
    
  ]

  const [colaboradores, setColaboradores] = useState(colaborador);
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorTime(cor, id) {
    
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}
    ])
    
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
      cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          aoFavoritar={resolverFavorito}
          nome={time.nome}
          id={time.id}
          key={time.id}
          cor={time.cor}
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
