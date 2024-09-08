import express from 'express'
import SelecaoController from "./app/controller/SelecaoController.js";

const app = express()
app.use(express.json())

// rotas
app.get('/selecoes', SelecaoController.index);

app.get('/selecoes/:id', SelecaoController.show);

app.post('/selecoes', SelecaoController.store);

app.delete('/selecoes/:id', SelecaoController.delete);

app.put('/selecoes/:id', SelecaoController.update);

export default app;