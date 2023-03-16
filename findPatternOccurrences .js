function findPatternOccurrences(text, pattern) {
  let count = 0;
  const patternLength = pattern.length;
  
  for (let i = 0; i < text.length - patternLength + 1; i++) {
    if (text.substr(i, patternLength) === pattern) {
      count++;
    }
  }
  
  return count;
}

// The findPatternOccurrences function takes two arguments: text, which is the text to search for the pattern, and pattern, which is the pattern to search for.

// The function initializes a count variable to keep track of how many times the pattern appears in the text. It then loops over every possible substring of the text that has the same length as the pattern. For each substring, the function checks if it matches the pattern. If it does, it increments the count variable.

// Once the loop is complete, the function returns the final value of the count variable, which represents the number of times the pattern appears in the text.

// Here's an example of how to use the function:

const text = 'tadadattaetadadadafa';
const pattern = 'dada';

const count = findPatternOccurrences(text, pattern);

console.log(`The pattern "${pattern}" appears ${count} times in the text "${text}".`);