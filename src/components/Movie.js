import React from 'react'; 



const setVoteClass=(vote)=>{
    if(vote >=7){
        return "green"
    }else if (vote >= 5){
        return "orange"
    } else {
        return "red";
    }
}

const Movie = ({title, poster_path, overview, vote_average}) => (
    <div className="movie">
        {/* TODO: Add wikipedia search link here, open in newtab. */}
        <img src={poster_path ? process.env.REACT_APP_IMG_API+poster_path : "https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>
        <div className="movie-overview">
            <h2>Overview: </h2>
            <p>{overview}</p>
        </div>
    </div>
);

export default Movie; 