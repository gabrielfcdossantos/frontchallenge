import React, { useState } from 'react';
import './App.css';
import apolloClient from './sevices/apollo';
import { ApolloProvider } from '@apollo/client';
import User from './components/UserGitHub/index';

function App() {
  const [dados, setDados] = useState('');

  async function handleChange(e) {
    setDados(e.target.value);
  }

  async function handleSubmit(e) {
    handleChange(e);
  }
  return (
    <ApolloProvider client={apolloClient}>
      <div className='main'>
        <label>Busque usuários do GitHub por aqui</label>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              class='input-block'
              type='text'
              required
              value={dados}
              onChange={handleChange}
            />
          </label>
        </form>
        <User login={dados} />
      </div>
    </ApolloProvider>
  );
}

export default App;
