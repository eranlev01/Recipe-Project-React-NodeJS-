const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// connect to database
const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'Recipe'
})

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log("connected to my sql")
})

// get all dishes from sql
app.get('/dishes', async (req, res) => {
    let q = `SELECT * FROM dish`
    const result = await Query(q)
    res.json(result)
})

//get a specific Recipe by the  select dish's id  
app.get('/recipes/:id', async (req, res) => {
    const q = `SELECT * FROM recipes
    WHERE d_id = ?`
    db.query(q, [req.params.id], (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.json(results)
        }
    })
})

//Add Recipe
app.post('/recipes', async (req, res) => {
    const { d_id, user, r_name, ingredients, preparation } = req.body
    let q = `INSERT INTO recipes(d_id, user, r_name, ingredients, preparation)
    VALUES(${d_id}, '${user}', '${r_name}', '${ingredients}', '${preparation}') `

    try {
        const results = await Query(q)
        res.json(results)

    }
    catch (err) {
        console.log(err)
    }
})

// promise query
const Query = (q, ...par) => {
    return new Promise((resolve, reject) => {
        db.query(q, par, (err, results) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(results)
            }

        })
    })
}

app.listen(2000, console.log('listening on http://localhost:2000'))