const express = require("express");
const mysql = require("mysql");
const mysql2 = require("mysql2");
const cors = require("cors");
const Router= express.Router();

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "tamseel911",
    database: "Infs"
})



app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    con.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], 
        (err, result) => {
            if(err){
                res.status(500).send({ error: err.message });
            } else {
                if(result.length > 0){
                    const user = result[0];
                    res.send(result);
                   // res.send({ message: "Login successful", user });
                } else {
                    res.send({ message: "WRONG USERNAME OR PASSWORD!" });
                }
            }
        }
    );
});

app.use('/api', Router); 

app.listen(3001, () => {
    console.log("Tamseel backend server is running ");
})