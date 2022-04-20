const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my own over Smarty Pant & shirt!! with auto restart');
})

const users = [
    { id: 1, name: 'Sohan', email: 'Sohan@gmail.com', phone: '0172091002' },
    { id: 2, name: 'subon', email: 'subon@gmail.com', phone: '0172091002' },
    { id: 3, name: 'Suchonda', email: 'Suchonda@gmail.com', phone: '0172091002' },
    { id: 4, name: 'sujon', email: 'sujon@gmail.com', phone: '0172091002' },
    { id: 5, name: 'Sumon', email: 'sumon@gmail.com', phone: '0172091002' },
    { id: 6, name: 'salim', email: 'salim@gmail.com', phone: '0172091002' },
    { id: 7, name: 'sabbir', email: 'sabbir@gmail.com', phone: '0172091002' }
]

// app.get('/users', (req, res) => {
//     res.send(users);
// })

//fileter by search query parameter
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'banana', 'orange']);
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour soud fazle flavour');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})