import React from 'react';
import '../../App.css';
import '../PhotoGrid.css'

export default function NatureArticle() {
  return (
    <div>
        <h1 className='nature'>Comment s'habiller chice pendant les avantures de nature</h1>
        <div class="row">
            <div class="column2">
                <img src='images/mountain.jpg'/>            
            </div>

            <div class="column2">
                <img src='images/bun.jpg'/>
            </div>
        </div>
        <p className='paragraph'>Pour rendre vos habillements plus interressants, il est toujours une bonne idée de porter une chandail ou blouse avec un slogan ou modèle que vous aimez. En cas de doute, prennez votre pair de leggings préférés. Il est essentiel d’investir dans une pair de leggings de bonne qualité, ça se voit lorsque le matériel est trop mince. Si vous êtes courageux, vous pouvez même porter des pantalons blancs, mais faites attention à où vous vous asseyez! Cela fonctionne même dans des contextes athlétiques ou dans la nature.
</p>
        <div class="row">
            <div class="column2">
                <img src='images/Profile.png'/>            
            </div>

            <div class="column2">
                <img src='images/sunglasses.png'/>
            </div>
        </div>
    </div>
  );
}