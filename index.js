/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/

const person = {
    name:"Ibrahim",
    Age: 26,
    city: "Kuwait"
}

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email="iaa2132@columbia.edu";

//console.log(person)
/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
const object ={
    name: 'John', 
    age: 25
}

function hasKey(object, key){
    if (object[key]){
        return console.log("True");
    }
    else{
        return console.log("False");
    }
}
//hasKey(object,"age");


/********************************/

const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];
  /******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to print the titles of all the movies.
  ********************************/
  
function movieTitle (object){
  object.forEach(element => {console.log(element.title)});
}

//movieTitle(movies);

  
  /******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
  
  function CounterFor1994Movies (object){
    const counter = object.reduce((accum, element) => {

      if (element.year === 1994){
        return ++accum;
      }
      else{
        return accum;
      }
  },0);

  return counter;
}
//console.log(CounterFor1994Movies(movies));

  
  /******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
  
  function updateDarkKnight(movies){
    return movies.map(element=>{
      if (element.title==="The Dark Knight"){
        element.genre="Action/Drama";
        return element
      }
      else{
        return element;
      }
    })
  }

  console.log(updateDarkKnight(movies));