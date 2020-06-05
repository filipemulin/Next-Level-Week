// Importar a depenência do sqlite 3
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que ira fazer alterações no banco de dados 

const db = new sqlite3.Database("./src/database/database.db")


// Exportar o banco de daos 

module.exports =  db
// Utilizar o objeto de banco de dados para nossas operações

db.serialize(() => {
    // Criar uma tabela
//     db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         adress TEXT,
//         adress2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );
// `)

//     // Inserir dadaos na tabela 
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         adress, 
//         adress2,
//         state, 
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
// `

//     const values = [
//         "https://images.unsplash.com/photo-1507560461415-997cd00bfd45?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
//         "Papersiders",
//         "Guilherme Gembalia, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Residuos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertdata(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("cadastrado com sucesso")
//         console.log(this)
//     }


//     db.run(query, values, afterInsertdata)

    // Consultar dados da tabela 
    // db.all(`SELECT * FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui Estão seus registros: ")
    //     console.log(rows)
    // })


    // Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function (err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("registro deletado com sucesso")
    // })
    

})