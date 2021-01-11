import React, { useState } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {

  const [done, setDone] = useState(false);

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          {done ? 'MERCI!' : 'Joingnez-vous à mes aventures de mode et recevez des consultations et articles gratuits!'}
        </p>
        <p className='footer-subscription-text'>
        {done ? "" : "Vous pouvez vous abonnez à n'importe quel moment"}
        </p>
        <div className='input-areas'>
          { !done &&
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Votre courriel'
              disabled={done}
            />
            <Button buttonStyle='btn--outline' disabled={done} onClick={() => setDone(true)}>S'abonner</Button>
          </form> }
        </div>
      </section>
    </div>
  );
}

export default Footer;
