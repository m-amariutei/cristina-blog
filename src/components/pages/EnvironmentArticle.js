import React from 'react';
import '../../App.css';
import '../PhotoGrid.css'

export default function EnvironmentArticle() {
  return (
    <div>
        <h1 className='environment'>Prévoir l'environnement est la clé de la coordination</h1>
        <div class="row">
            <div class="column2">
                <img src='images/jordan.png'/>            
            </div>

            <div class="column2">
                <img src='images/door.jpg'/>
            </div>
        </div>
        <p className='paragraph'>Je dis toujours que si vous vous habillez avec style, vous pourriez aussi bien prendre une bonne photo. La meilleure façon de faire cela et d'étonner les autres dans n'importe quelle situation est de coordonner votre tenue à votre environnement. Ceci est agréable à regarder et rehausse instantanément votre tenue. Il existe plusieurs moyens d'y parvenir. Si vous prévoyez de visiter des fleurs de cerisier roses, pourquoi ne pas porter un manteau de même couleur. En revanche, il est tout aussi efficace d'opter pour un contraste. Dans le désert, on peut utiliser des motifs floraux colorés pour créer cet effet.
</p>
        <div class="row">
            <div class="column2">
                <img src='images/green.png'/>            
            </div>

            <div class="column2">
                <img src='images/young.png'/>
            </div>
        </div>
    </div>
  );
}