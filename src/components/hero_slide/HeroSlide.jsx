import React, { useEffect, useState, useRef} from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button, {OutlineButton } from '../button/Button';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './hero-slide.scss';
import { useHistory } from 'react-router';

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState([]);
  // console.log(movieItems);
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {params});
        setMovieItems(response.results.slice(1, 4)); // gets the first 4 movies and is response.results.slice( 1,3) in the tutorial
        console.log(response);
      } catch (error) {
        console.log(error); // changed from 'error', this gives us
      }
    };
    getMovies();
  }, []);

  return (
    <div className='hero-slide'>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{delay: 4000}} delay is in milliseconds
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? 'active' : ''}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const HeroSlideItem = (props) => {
  let history = useHistory();
  const item = props.item;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{backgroundImage: `url(${background})`}}
    >
      <div className='hero-slide__item__content container'>
        <div className='hero-slide__item__content_info'>
          <h2 className='title'>{item.title}</h2>
          <div className='overview'>{item.overview}</div>
          <div className='btns'>
                <Button onClick={() => history.push('/movie/' + item.id)}>
                    Watch Now
                </Button>
                <OutlineButton onClick={() => console.log('trailer')}>
                    Watch Trailer
                </OutlineButton>
          </div>
        </div>
        <div className='hero-slide__item__content__poster'>
              <img src={apiConfig.wq500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
