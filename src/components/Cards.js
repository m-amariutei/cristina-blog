 import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Consultez ces articles!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/wilderness.jpg'
              text='Comment shabiller chic pendant les aventures de nature'
              label='Mode'
              path='/nature'
            />
            <CardItem
              src='images/comfy2.jpg'
              text="Vous n'avez pas besoin d'être mal à l'aise pour être à la mode"
              label='Style'
              path='/confortable'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src='images/pink-flower.jpg'
                text='Connaitre l’environnement prévu est la clé de la coordination'
                label='Coordination'
                path='/environnement'
              />
            <CardItem
              src='images/souliers.jpg'
              text='Habillez-vous pour impressionner ... Vous-mêmes'
              label='Mode'
              path='/robes'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src='images/macaroons.jpg'
                text='N’avez pas peur de jouer avec les couleurs'
                label='Couleurs'
                path='/couleur'
              />
            <CardItem
              src='images/jacket-rack.jpg'
              text='Un beau manteau est essentiel au Canada'
              label='Manteaux'
              path='/manteaux'
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
