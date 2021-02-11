"use strict";

//const answer = prompt("Вам исполнилось 18 лет?" , "");
//console.log(typeof(answer));
const NumberofFilms = +prompt('Сколько фильмов вы уже посмотрели?' , '');

const personalMovieDB = {
    count: NumberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 const a = prompt('Один из последних просмотренных фильмов?', ''),
       b = prompt('На сколько оценте его?',''),
       c = prompt('Один из последних просмотренных фильмов?', ''),
       d = prompt('На сколько оценте его?','');

personalMovieDB.movies[a]= b;
personalMovieDB.movies[c]= d;
console.log(personalMovieDB);