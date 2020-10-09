import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import React, { Component } from 'react';
import './styles.css';

const GET_USER = gql`
  query($login: String!) {
    user(login: $login) {
      name
      avatarUrl
      login
      bio
      url
      repositories {
        totalCount
      }
    }
  }
`;
//const name = 'Gabrielfcdossantos';

function User({ login }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      login: login
    }
  });
  function handleClick() {
    alert('clicou');
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p></p>;
  return (
    <button className='BoxInfo' onclick={handleClick}>
      <div className='ListInfo'>
        <p>Nome: {data.user.name}</p>
        <p>Login: {data.user.login}</p>
        <p>Bio: {data.user.bio}</p>
        <p>URL: {data.user.url}</p>
        <p>Quantidade de Repositórios: {data.user.repositories.totalCount}</p>
      </div>
      <div>
        <img className='ImgUser' src={data.user.avatarUrl} alt='logo' />
      </div>
    </button>
  );
}
export default User;
