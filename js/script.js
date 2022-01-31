"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms === "" || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", "Бригада");
        let b = prompt("На сколько оцените его? ( от 0 до 10 )", 8);

        if (a != null && b != null && a != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert("Просмотрено довольно мало фильмов ");
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert("Вы классический зритель ");
    } else if (numberOfFilms >= 30) {
        alert("Вы киноман");
    }
}
detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt("Ваш любимый жанр под номером", i);
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}
showMyDB();
