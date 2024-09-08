import { Router } from 'express'
import SelecaoController from "./app/controller/SelecaoController.js";

const router = Router()

router.get('/selecoes', SelecaoController.index);

router.get('/selecoes/:id', SelecaoController.show);

router.post('/selecoes', SelecaoController.store);

router.delete('/selecoes/:id', SelecaoController.delete);

router.put('/selecoes/:id', SelecaoController.update);

export default router