import React from 'react';
import './footer.scss';
import {
    Link
} from 'react-router-dom';

// TODO: Look into importing multiple items from 1 folder || Attempt v1 not good so far
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/BurbleLogo.png';

const Footer = () => {
  return (
    <div
      className='footer'
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className='footer__content container'>
        <div className='footer__content__logo'>
          <div className='logo'>
            <img src={logo} alt='' />
            <Link to='/'> Burble </Link>{' '}
          </div>{' '}
        </div>{' '}
        <div className='footer__content__menus'>
          <div className='footer__content__menu'>
            <Link to='/'> Home </Link> <Link to='/'> Contact Us </Link>{' '}
            <Link to={{ pathname: "https://tinyurl.com/bdf62rbw" }} target='_blank' rel='noopener noreferrer'> Terms Of Service </Link>{' '}
            <Link to={{ pathname: "https://github.com/Nerajno/Burble" }} target='_blank' rel='noopener noreferrer'> About Me </Link>{' '}
          </div>{' '}
          <div className='footer__content__menu'>
          <Link to={{ pathname: "https://tinyurl.com/bdf62rbw" }} target='_blank' rel='noopener noreferrer'> Live </Link> <Link to='/'> FAQ </Link>{' '}
            <Link to={{ pathname: "https://tinyurl.com/bdf62rbw" }} target='_blank' rel='noopener noreferrer'> Premium </Link> <Link to='/'> Privacy Policy </Link>{' '}
          </div>{' '}
          <div className='footer__content__menu'>
            <Link to={{ pathname: "https://tinyurl.com/bdf62rbw" }} target='_blank' rel='noopener noreferrer'> You Must Watch </Link>{' '}
            <Link to={{ pathname: "https://tinyurl.com/bdf62rbw" }} target='_blank' rel='noopener noreferrer'> Recent Release </Link> <Link to={{ pathname: "https://tinyurl.com/bdf62rbw" }} target='_blank' rel='noopener noreferrer'> Top IMDB </Link>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      {/* Footer */}{' '}
    </div>
  );
};

export default Footer;
