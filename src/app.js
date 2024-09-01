import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Olá mundo');
});

export default app;