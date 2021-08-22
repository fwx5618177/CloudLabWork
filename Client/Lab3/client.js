const axios = require('axios');
const text = {
    text: 'some text to test different word\'s length'
};

axios.post('http://52.14.40.163:8999/getWordLengthFrequency', text)
    .then(res => displayResult(res))
    .catch(err => console.error(err));

function displayResult(res) {
    let display = new Array();
    for (let i = 0; i < res.data.length; i++) {
        display.push(new Table((i + 1), res.data[i]));
    }
    console.table(display);
}

function Table(characters, words) {
    characters = characters;
    words = words;
}