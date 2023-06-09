// Configuração do Banco

import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "101023",
    database: "autenticacao_crud"
})