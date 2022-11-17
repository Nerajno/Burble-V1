import React, { useEffect, useState } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import tmdbApi, { category, movieType } from '../../api/tmdbApi.js';
import apiConfig from '../../api/apiConfig.js';

import './hero-slide.scss';

const HeroSlide = () => {
    SwiperCore.use([Autoplay])
    const [movieItems, setMovieItems] = useState([]);
    console.log(movieItems);
    useEffect(() =>{
        const getMovies = async () =>{
            const params = { page : 1}
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(1, 4));
                console.log(response);
            }catch( error){
                console.log(error); // changed from 'error'
            }
        }
        getMovies();
    }, [])

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidersperview={1}
                >
                    {
                        movieItems.map((item, i) => (
                            <SwiperSlide key={i}>
                                {({isActive}) =>(
                                    <img src={apiConfig.originalImage(item.backdrop_path)} />
                                )}
                            </SwiperSlide>
                        ))
                    }
            </Swiper>
        </div>
    )
};

export default HeroSlide;