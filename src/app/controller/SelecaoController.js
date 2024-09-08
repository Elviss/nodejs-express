import connection from "../database/connection.js";

class SelecaoController {
    index(req, res) {
        const sql = "SELECT * FROM selecoes";

        connection.query(sql, (error, result) => {
            if(error) {
                res.status(404).json({msg: "query error", error: error});
            } else {
                res.status(200).json(result);
            }
        })
    }

    show(req, res) {
        const id = req.params.id;
        const sql = "SELECT * FROM selecoes WHERE id = ?";

        connection.query(sql, id, (error, result) => {
            const linha = result[0];
            if(error) {
                res.status(404).json({msg: "query error", error: error});
            } else {
                res.status(200).json(linha);
            }
        })
    }

    store(req, res) {
        const selecao = req.body;
        const sql = "INSERT INTO selecoes SET ?";

        connection.query(sql, selecao, (error, result) => {
            if(error) {
                res.status(404).json({msg: "query error", error: error});
            } else {
                res.status(201).json(result);
            }
        })
    }

    update(req, res) {
        const id = req.params.id;
        const selecao = req.body;
        const sql = "UPDATE selecoes SET ? WHERE id = ?";

        connection.query(sql, [selecao, id], (error, result) => {
            if(error) {
                res.status(404).json({msg: "query error", error: error});
            } else {
                res.status(200).json(result);
            }
        })
    }

    delete(req, res) {
        const id = req.params.id;
        const sql = "DELETE FROM selecoes WHERE id = ?";

        connection.query(sql, id, (error, result) => {
            if(error) {
                res.status(404).json({msg: "query error", error: error});
            } else {
                res.status(200).json(result);
            }
        })
    }
}

// Singleton pattern
export default new SelecaoController();