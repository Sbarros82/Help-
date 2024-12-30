// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [
    { username: 'admin', password: '1234' }
];

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Usuário ou senha incorretos' });
    }
});

app.get('/dashboard', (req, res) => {
    res.send('Bem-vindo ao painel de controle!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
