const apiConfig ={
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'api_key=d5199020aac77d6859c71466db7228e1', // TODO: need  hide this key
    originalImage: (imgPath) => 'https://image.tmdb.org/t/p/original/${imgPath}',
    wq500Image: (imgPath) => 'https://image.tmdb.org/t/p/w500/${imgPath}',
}

// console.log(apiConfig.baseUrl+"tv/500?"+apiConfig.apiKey);
// console.log("https://api.themoviedb.org/3/movie/550?api_key=d5199020aac77d6859c71466db7228e1");


export default apiConfig;