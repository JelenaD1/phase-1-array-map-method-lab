const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
      




function titleCased() {
  const string = tutorials.map(element =>{
    return element
      .split(' ')
      .map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
      })
    .join(' ');
  })
  return string
}

// function will look through each array of strings,
// will determine if the strings first leeter of each word needs to be capitalized
// will capitalize the words that need it
// will return an array of strings that have proper case capitalization



//  const titleCased = () => {
  
  //return tutorials.map((eachTutorial) => {
    //const splitTutorial = eachTutorial.split(" ") 
    //return splitTutorial.map(eachWord => 
     //eachWord.charAt(0).toUpperCase() + eachWord.slice(1)
    //)

  //})
  
 
//}

