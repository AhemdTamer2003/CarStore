import React from 'react';
import './Background.css'; // Ensure correct path to your CSS file
import video1 from '../../assets/video1.mp4'; // Check path and ensure lowercase 'assets'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

function Background({ playStatus, heroCount }) {
  if (playStatus) {
    return (
      <video className='background fade-in' autoPlay loop muted>
        <source src={video1} type='video/mp4' />
      </video>
    );
  } else {
    switch (heroCount) {
      case 0:
        return <img src={image1} className='background fade-in' alt="Image 1" />;
      case 1:
        return <img src={image2} className='background fade-in' alt="Image 2" />;
      case 2:
        return <img src={image3} className='background fade-in' alt="Image 3" />;
      default:
        return <div className='background fade-in'>Default Background</div>;
    }
  }
}

export default Background;
