import { wordList } from './wordFile_v2.mjs';

const word = wordList;

// Generate a random number for selecting a word from our 'wordFile_v2.mjs'
function randomWordSelector(num) {
    // Gets # from 1 -> num - 1
    return Math.floor(Math.random() * num - 1)
}

// Generate a random number for sentence length
function randomSentenceLength() {
    // Gets # from 1 -> 50
    return Math.floor(1 + Math.random() * 5)
}
let sentenceLength;

// Stores the randomly generated sentence
let generatedSentence = [];

function formatInfo() {
    const formatted = generatedSentence.join(' ');
    //return console.log(formatted)
    document.getElementById("msg").innerHTML = `"${formatted}"`;
    generatedSentence = [];
}

export function newWord() {
    sentenceLength = randomSentenceLength()
    console.log(sentenceLength)
    for (let i = 1; i <= sentenceLength; i++) {
        for(let prop in word) {
            let optionIndex = randomWordSelector(word[prop].length)

            // grab the object's properties
            switch(prop) {
                case 'name':
                    //generatedSentence.push(`"${word[prop][optionIndex]}"`)
                    generatedSentence.push(`${word[prop][optionIndex]}`);
                    break
                default:
                    //generatedSentence.push('Not enough info.')
                    generatedSentence.push("Not enough info!");
            }
        }
    }
    formatInfo();
}

