/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.skills.pop();
console.log(me); */


/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */

/* let oddArray = [];
for (let i = 0; i <= 100; i++) {
  if ((i % 2)) {
    oddArray.push(i);
  }
}
console.log(oddArray); */

/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

/* let randomArray = [];
for (let i = 0; i <= 10; i++) {
  randomArray.push(Math.round(Math.random() * 100));
}
console.log(randomArray); */

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

/* let array = [3, 4, 6, 1, 8, 9, 10, 11, 10];
let evenArray = [];
for (let i = 0; i < array.length; i++) {
  if (!(array[i] % 2)) {
    evenArray.push(array[i]);
  }
}
console.log(evenArray); */

/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */

/* let array = [3, 5, 6, 2, 7, 1, 9];
let amount = 0;
for (let i = 0; i < array.length; i++) {
  amount += array[i];
}
console.log(amount); */

/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/

/* let array = [3, 5, 2, 7, 10, 45, 21, 2];
for (i = 0; i < array.length; i++) {
  array[i]++;
}
console.log(array); */


/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/

/* let array = [3, 6, 7, 2, 4, 78, 54, 23];
for (i = 0; i < array.length; i++) {
  if (!(array[i] % 2)) {
    array.splice(i, 1);
    i--;
  }
}
console.log(array); */

/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

/* let array = [];
let randomNumber;
let numberOk = true;
for (i = 0; i < 10; i++) {
  randomNumber = (Math.round(Math.random() * 10));
  for (n = 0; n < array.length; n++) {
    if (randomNumber !== array[n]) {
      numberOk = true;
    } else {
      numberOk = false;
      break;
    }
  }
  if (numberOk) {
    array.push(randomNumber);
  } else {
    i--;
  }
}
console.log(array); */


/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

/* let wordsArray = ["Pippo", "Topolino", "Paperino", "Zio Paperone", "Qui", "Quo"];
let lettersAmount;
for (i = 0; i < wordsArray.length; i++) {
  lettersAmount = wordsArray[i].length;
  wordsArray[i] = lettersAmount;
}

console.log(wordsArray); */

/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

/* let array = [1, 2, 3, 4, 5, 6, 7];
let lastNumber;
let n = 0;
for (i = array.length; i > 0; i--) {
  lastNumber = array.pop();
  array.splice(n, 0, lastNumber);
  n++;
}

console.log(array); */

/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/

/* let array = [3, 56, 8, 230];
let greater = 0;
for (i = 0; i < array.length; i++) {
  if (array[1] > greater) {
    console.log("True col " + array[i]);
    greater = array[i];
  }
}  TO FIX

console.log(greater); */


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/

/* let older = ["", 2023];
for (i = 0; i < movies.length; i++) {
  yearNumber = parseInt(movies[i].Year);
  if (yearNumber < older[1]) {
    older[0] = (movies[i].Title);
    older[1] = yearNumber;

  }
}
console.log("Il film più veccho è " + older[0] + ", del " + older[1]); */


/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

/* console.log("Nell'array ci sono " + movies.length + " film."); */

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/* let titleArray = [];
for(i = 0; i < movies.length; i++) {
  titleArray.push(movies[i].Title);
  console.log(titleArray[i]);
} */

/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* console.log("I film uscito nel millenio corrente sono:")
for(i = 0; i < movies.length; i++) {
  if(movies[i].Year >= 2000) {
    console.log(movies[i].Title + ", uscito nel " + movies[i].Year);
  }
} */

/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
const id = 'tt0355702'

/* console.log("Il film col codice tt0355702 é:");
for (i = 0; i < movies.length; i++) {
  if (movies[i].imdbID === "tt0355702") {
    console.log(movies[i].Title);
  }
} */

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* let yearsSum = 0;
for (i = 0; i < movies.length; i++) {
  yearsSum += parseInt(movies[i].Year);
}
console.log("La somma totale degli anni è: " + yearsSum); */


/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

/* for (i = 0; i < movies.length; i++) {
  if (movies[i].Title.includes("Lord")) {
    console.log(movies[i].Title);
  }
} */