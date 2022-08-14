import { wordList } from './wordFile_v2.mjs';

const word = wordList;

// Generate a random number for selecting a word from our 'wordFile_v2.mjs'
function randomWordSelector(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}

// Generate a random number for sentence length
function randomSentenceLength() {
    // Gets # from 0 -> 50
    return Math.floor(Math.random() * 50)
}
console.log(randomSentenceLength())

// Stores the random sentence
let generatedSentence = [];

export function newWord() {
for(let prop in word) {
    let optionIndex = randomWordSelector(word[prop].length)

    // grab the object's properties
    switch(prop) {
        case 'name':
            generatedSentence.push(`"${word[prop][optionIndex]}"`)
            break
        default:
            generatedSentence.push('Not enough info.')
    }
}
}

export function formatInfo() {
    const formatted = generatedSentence
    //return console.log(formatted)
    document.getElementById("msg").innerHTML = `${formatted}`;
}

formatInfo();