import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";



function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  // const getMovies = (API) =>{
  //   fetch(FEATURED_API)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     // console.log(data);
  //     setMovies(data.results);
  //   });
  // }
 console.log(process.env.REACT_APP_FEATURED_API);
  useEffect(() => {
    fetch(process.env.REACT_APP_FEATURED_API, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
      .then((res) => res.json())
      .then((data) => {

        setMovies(data.results);
      });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
    fetch(process.env.REACT_APP_SEARCH_API+searchTerm)
      .then((res) => res.json())
      .then((data) => {
         console.log(data);
        setMovies(data.results);
      });
      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
    <header>
      <form onSubmit={handleOnSubmit}>
      <input className="search" type="search" value={searchTerm} onChange={handleOnChange} placeholder="Search...." />
      </form>
      </header>
    <div className="movie-container">
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
    </>
  );
}

export default App;
