const apiConfig ={
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd5199020aac77d6859c71466db7228e1', // TODO: need  hide this key
    originalImage: (imgPath) => 'https://image.tmdb.org/t/p/original/${imgPath}',
    wq500Image: (imgPath) => 'https://image.tmdb.org/t/p/w500/${imgPath}',
}

export default apiConfig;