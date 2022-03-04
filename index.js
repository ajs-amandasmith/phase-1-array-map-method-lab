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

// const titleCased = () => {
//   return tutorials
// }

const titleCased = () => {
  return tutorials.map(function (sentence) {
    const sentenceArrays = sentence.split(' ');
    // console.log(sentenceArrays);
    const wordArrays = sentenceArrays.map(function (words) {
      // console.log('words upperCase:', words[0].toUpperCase() + words.slice(1));
      return words[0].toUpperCase() + words.slice(1);
    })
    return wordArrays.join(' ');
  });
}


console.log('titleCased:', titleCased());


// Iterate over the input array
// Split the sentences into words, by turning the strings into arrays
// Iterate over the new arrays of words
// Capitalize each word in the arrays (Can use .map() here)
// Join the words into a string/sentence
