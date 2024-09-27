import React from 'react';
import Card from './Card';
import data from '../projets.json';
import '../styles/main.css';


function Main() {
  return (
      <main className="main">
      <h2 className="main__title">Mes projets</h2>
      <div className='main__gallery'>
      {
        data.map(post => (
          <Card 
          key={post.id}
          id={post.id}
          nom={post.nom}
          description={post.description}
          image={post.image}
          />
        ))
      }
      </div>
     
      </main>
  );
}

export default Main;