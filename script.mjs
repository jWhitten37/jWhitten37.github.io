import { wordList } from './wordFile_v2.mjs';

function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const word = wordList;
  
  // Store the 'wisdom' in an array
  let capturedWord = []
  
  // Iterate over the object
  for(let prop in word) {
    let optionIdx = generateRandomNumber(word[prop].length)
    // console.log(optionIdx);
    // use the object's properties to customize the message being added to capturedWord  
     switch(prop) {
      case 'name':
        capturedWord.push(`"${word[prop][optionIdx]}".`)
        break
      default:
        capturedWord.push('There is not enough info.')
    }
  }
  
  function formatInfo(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = capturedWord.join('\n')
    console.log(formatted)
  }
  
  formatInfo(capturedWord);