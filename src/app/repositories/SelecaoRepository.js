import connection from "../database/connection.js";

class SelecaoRepository {

    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?";
        return new Promise((resolve, reject) => {
            connection.query(sql, selecao, (error, result) => {
                if (error) return reject('Não foi possível cadastrar')

                const rows = JSON.parse(JSON.stringify(result))
                return resolve(rows)
            })
        })
    }

    findAll() {
        const sql = "SELECT * FROM selecoes";
        return new Promise((resolve, reject) => {
            connection.query(sql, (error, result) => {
                if(error) return reject('Não foi possível localizar')

                const rows = JSON.parse(JSON.stringify(result))
                return resolve(rows)
            })
        })
    }

    findById(id) {

        const sql = "SELECT * FROM selecoes WHERE id = ?";

        return new Promise((resolve, reject) => {
            connection.query(sql, id, (error, result) => {
                if(error) return reject('Não foi possível localizar')

                const rows = JSON.parse(JSON.stringify(result))
                return resolve(rows)
            })
        })
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id = ?";

        return new Promise((resolve, reject) => {
            connection.query(sql, [selecao, id], (error, result) => {
                if(error) return reject('Não foi possível atualizar')

                const rows = JSON.parse(JSON.stringify(result))
                return resolve(rows)
            })
        })
    }

    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id = ?";

        return new Promise((resolve, reject) => {
            connection.query(sql, id, (error, result) => {
                if (error) return reject('Não foi possível atualizar')

                const rows = JSON.parse(JSON.stringify(result))
                return resolve(rows)
            })
        })
    }
}

export default new SelecaoRepository();