import React from 'react';
import '../../App.css';
import '../PhotoGrid.css'

export default function ColorArticle() {
  return (
    <div>
        <h1 className='color'>N’avez pas peur de jouer avec les couleurs!</h1>
        <div class="row">
            <div class="column2">
                <img src='images/yellow.png'/>            
            </div>

            <div class="column2">
                <img src='images/pink-car.jpg'/>
            </div>
        </div>
        <p className='paragraph'>Utiliser des couleurs est un moyen facile de se démarquer tout en embellissant votre tenue. Habituellement, vous voulez opter pour les mêmes nuances de couleurs différentes. Par exemple, une couleur rouge foncé sera meilleure avec un noir tandis qu'un rose pâle va avec un ton plus gris. Assurez-vous également d'expérimenter, parfois les couleurs que vous pensez ne pas aller bien ensemble, finissent par être vraiment belles.
</p>
    </div>
  );
}