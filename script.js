"use strict";
let numberOfFilms ;

start();

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы просмотрели ?");
    while (numberOfFilms == "" || numberOfFilms == 0 ){
        alert("error");
        numberOfFilms = +prompt("Всё таки , колько фильмов вы просмотрели ?");
    }
}
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let name,mark;


asking();

function asking(){
    for (let i = 0; i < numberOfFilms; i++) {
        name = prompt("Один из просмотренных фильмов?","");
       if ((name.length >= 50)||(name == "")){
           do{
           alert("error");
           name = prompt("Введите корректное название");
           }while((name.length >= 50)||(name == "")) 
       }
        mark = +prompt("На сколько оценете его?");
       personalMovieDB.movies[name]=mark;
   }
}

checking();

function checking(){
    if (personalMovieDB.count < 10) {
        alert("Вы просмотрели слишком мало фильмов");
    } else if ((personalMovieDB.count > 10) || (personalMovieDB.count < 30)) {
        alert("Вы - классический зритель");
    } else if (personalMovieDB.count > 50) {
        alert("Вы - киноман");
    } else {
        alert("ERROR 404")
    }
}


writeYourGenres();
showMyDB();

function writeYourGenres(personalMovieDB){
    for (let i=0 ; i<3 ; i++){
        let genre
        genre = prompt(`Ваш любимый жанр по номером ${i+1}`,"");
        if ((genre.length >= 50)||(genre == "")){
           
            do{
            alert("error");
            genre = prompt("Введите корректное название");
            }while((genre.length >= 50)||(genre == "")) 
        }
        personalMovieDB.genres[i]=genre;
    }
    return personalMovieDB;
} 


function  showMyDB (){
    if (personalMovieDB.privat == false){
        alert(personalMovieDB.count);
        alert(personalMovieDB.movies);
        alert(personalMovieDB.actors);
        alert(personalMovieDB.genres);
    }
}