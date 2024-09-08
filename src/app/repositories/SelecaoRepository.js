import { query } from "../database/connection.js";

class SelecaoRepository {

    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?";
        return query(sql, selecao, 'Não foi possível cadastrar!')
    }

    findAll() {
        const sql = "SELECT * FROM selecoes";
        return query(sql, 'Não foi possível localizar!')
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id = ?";

        return query(sql, id, 'Não foi possível localizar!')
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id = ?";

        return query(sql, [selecao, id], 'Não foi possível atualizar!')
    }

    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id = ?";

        return query(sql, id, 'Não foi possível deletar!')
    }
}

export default new SelecaoRepository();