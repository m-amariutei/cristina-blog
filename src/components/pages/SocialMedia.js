import React from 'react';
import '../../App.css';
import CardItem from '../CardItem'
import { SocialIcon } from 'react-social-icons';

const pink ='#f20f84'


export default function SocialMedia() {
  return (
      <div>
        <h1 className='socialmedia'>Suivez-moi sur les médias sociaux!</h1>
        <div className='social'>
            <SocialIcon className='icon' network="instagram" url="https://www.instagram.com/cristina_amariutei" bgColor={pink} style={{ height: 150, width: 150 }} />
            <SocialIcon className='icon' network="facebook" url="https://www.facebook.com/profile.php?id=100018532238723" bgColor={pink} style={{ height: 150, width: 150 }} />
            <SocialIcon className='icon' network="pinterest" url="https://www.pinterest.ca/cristina_amariutei/_saved/" bgColor={pink} style={{ height: 150, width: 150 }} />
            <SocialIcon className='icon' network="tumblr" url="https://live-the-preppy-life-xox.tumblr.com/" bgColor={pink} style={{ height: 150, width: 150 }} />
            <SocialIcon className='icon' network="email" url="mailto:cristinaa.amariutei@gmail.com" bgColor={pink} style={{ height: 150, width: 150 }} />
        </div>
      </div>
  );
}


