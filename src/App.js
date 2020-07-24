import React, {useEffect, useState} from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('projects').then( response => {
      setRepositories(response.data);
    });
  }, []);

  

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: 'Jefferson da Silva',
      url: 'https://github.com/jeffsouza01/',
      techs: ['NodeJS', 'ReactNative']
    })

    setRepositories([...repositories, response.data]);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => (

          <li key={repository.id}>
            {repository.title}

            <button onClick={() => handleRemoveRepository(1)}>
              Remover
            </button>
          </li>

        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
