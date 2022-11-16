import React, { useEffect, useState } from 'react';
import tmdbApi,{ category, movieType } from '../../api/tmdbApi.js';
import apiConfig from '../../api/apiConfig.js';


const HeroSlide = () => {
    const [movieItems, setMovieItems] = useState([]);
    useEffect(() =>{
        const getMovies = async () =>{
            const params = { page : 1}
            try {
                const response = await tmdbApi.getMovieList(movieType.popular, {params});
                setMovieItems(response.results.slice(0, 4));
                console.log(response);
       
            }catch( error){
                console.log(error); // changed from 'error'
            }
        }
        getMovies();
    }, [])

    return (
        <div className="hero-slide">
            HeroSlide
        </div>
    )
};

export default HeroSlide;