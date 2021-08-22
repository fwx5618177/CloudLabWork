const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


const PORT = process.env.PORT || 8999;
const host = '0.0.0.0';

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// 路由
app.get('/', (req, res) => {
    const param = req.query;
    res.redirect(`/calc?${param}`);
})

app.get('/calc', (req, res) => {
    const data = req.query;
    const end = data.split('?')[1].split('&');
    let a = {}
    for(let i of end) {
        let [key, value] = i.split('=');
        a[key] = value
    }

    const { operand, numberone, numbertwo } = a;
    console.log(`conneted: \n ${JSON.stringify(req.query)}, ${doTheMath(operand, numberone, numbertwo)}`);        
    res.json(doTheMath(operand, numberone, numbertwo));        
});

app.post('/getWordLengthFrequency', async (req, res) => {    
    const { text } = req.body;
    console.log(`text: ${text}`);
    const words = !!text && text.split(' ');
    let result = new Array(10);
    result.fill(0);
    words.forEach(function (word) {
        result[word.length-1]++;
    });

    res.send(result);
    res.end();
});    


function doTheMath(operand, n1, n2) {
    if (operand === '+') {
        return (n1 + n2);
    } else if (operand === '-') {
        return (n1 - n2);
    } else if (operand === '/') {
        return (n1 / n2);
    } else if (operand === '*') {
        return (n1 * n2);
    }else{
        return null;
    }
}

app.listen(PORT, host, () => {
    console.log(`已经开始运行, express server地址: http://${host}:${PORT}.`);
});