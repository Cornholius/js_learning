/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 1; i++) {
    const watchedFilms = prompt('Один из последних просмотренных фильмов?', ''),
          filmScore = prompt('На сколько оцените его?', '');
    if (watchedFilms != null && filmScore != null && 
        watchedFilms != '' && filmScore != '' && 
        watchedFilms.length < 50) {
            personalMovieDB.movies[watchedFilms] = filmScore;
            console.log('Done');
            console.log(typeof(filmScore));
        } else {
            i--;
            console.log('Error');
        }
}

let i = 0;
do {
    const watchedFilms = prompt('Один из последних просмотренных фильмов?', ''),
          filmScore = prompt('На сколько оцените его?', '');
    if (watchedFilms != null && filmScore != null && 
        watchedFilms != '' && filmScore != '' && 
        watchedFilms.length < 50) {
            personalMovieDB.movies[watchedFilms] = filmScore;
            console.log('Done');
            console.log(typeof(filmScore));
            i++;
        } else {
            i--;
            console.log('Error');
        }
} while (i < 2);


console.log(personalMovieDB.movies);
