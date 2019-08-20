// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

class Dinosaur {
  constructor(attr) {
    this.diet = attr.diet;
    this.weight = attr.weight;
    this.length = attr.length;
    this.period = attr.period;
  }
  roar() {
    return 'RAWERSRARARWERSARARARRRR';
  }
}

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceous
const tryannosaurus = new Dinosaur({
  diet: 'carnivorous',
  weight: '7000kg',
  length: '12m',
  period: 'Late Cretaceous'
})

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic
const stegosaurous = new Dinosaur({
  diet: 'herbivorous',
  weight: '2000kg',
  length: '9m',
  period: 'Late Jurassic'
})

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceous
const velociraptor = new Dinosaur({
  diet: 'carnivorous',
  weight: '15kg',
  length: '1.8m',
  period: 'Late Cretaceous'
})

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log('Trannosaurous weight:', tryannosaurus.weight);

// What was the diet of a velociraptor?
console.log('Velociraptors diet:', velociraptor.diet);

// How long was a stegosaurus?
console.log('Stegasaurous length:', stegosaurous.length);

// What time period did tyrannosaurus live in?
console.log('Trannosaurous period:', tryannosaurus.period );


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
console.log('Roar method:', tryannosaurus.roar() );


// ==== Arrays ====
console.log('Arrays')
// Given an array of college graduates.  Complete the following requests using any array method you like

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

/* Request 1: Create a new array called universities that contains all the universities in the graduates array.  

Once you have the new array created, sort the universities alphabetically and log the result. */
const universities = [];
graduates.map( grad => {
  return universities.push(grad.university)
})
universities.sort();
console.log('Request 1:', universities)

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */
const contactInfo = [];
graduates.map( grad => {
  return contactInfo.push(`${grad.first_name}, ${grad.email}`)
})
console.log('Request 2:', contactInfo);


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */
const uni = [];
graduates.filter( university => {
  if (university.university.toLocaleLowerCase().includes('uni')) {
    return uni.push(university);
  }
})
console.log('Request 3:', uni);


// ==== ADVANCED Array Methods ====
console.log('Advanced Arrays')
// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.


zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
{"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
{"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
{"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
{"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
{"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
{"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
{"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
{"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
{"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];

/* Request 1: .forEach()

The zoo wants to display both the scientific name and the animal name in front of the habitats.  Return an array with only the animal and scientific names in it.  The individual values in the array should look like this "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
const animalNames = [];
zooAnimals.forEach( animal => {
  return animalNames.push(`Name: ${animal.animal_name}, Scientific: ${animal.scientific_name}`);
})
console.log('Request 1:', animalNames);

/* Request 2: .map()    

The zoos need a list of all their animal's names (names only, not scientific) converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.

*/

const lowerCase = [];
zooAnimals.map( animal => {
  return lowerCase.push(animal.animal_name.toLocaleLowerCase());
})
console.log('Request 2:', lowerCase); 

/* Request 3: .filter() 

The zoos are concenred about animals with a lower population count. Find out which animals have a population less than 5.

*/
const lowerPopulation = [];
zooAnimals.filter( animal => {
  return animal.population < 5 ? lowerPopulation.push(animal) : null;
})
console.log('Request 3:', lowerPopulation);

/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States.  Find the total population from all the zoos using the .reduce() method.

*/
let populationTotal = 0;
let pops = zooAnimals.map( animal => {
  return animal.population;
})

populationTotal = pops.reduce((a,b) => {
  return a + b;
})
console.log('Request 4:', populationTotal);


/* 

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/

