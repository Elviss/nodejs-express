import app from "./src/app.js";
const port = process.env.PORT || 3000

// liste port 3000
app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
});