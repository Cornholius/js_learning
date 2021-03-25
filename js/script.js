const watchedFilms = prompt('Один из последних просмотренных фильмов?', '');
const filmScore = +prompt('На сколько оцените его?', '');
const watchedFilms2 = prompt('Один из последних просмотренных фильмов?', '');
const filmScore2 = +prompt('На сколько оцените его?', '');
let personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[watchedFilms] = filmScore;
personalMovieDB.movies[watchedFilms2] = filmScore2;





console.log(personalMovieDB);