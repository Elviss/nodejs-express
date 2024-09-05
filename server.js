import app from "./src/app.js"
import connection from "./infra/connection.js"

const PORT = process.env.PORT || 3000

connection.connect((error) => {
    if(error) {
        console.error(error);
    } else {
        console.log("conectado");

        // liste port 3000
        app.listen(PORT, () => {
            console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
        })
    }
})

