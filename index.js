const express = require("express");
const app = express();

const pool = require("./config/db")
// Create table
async function DBConfig() {
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS tasks (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            description VARCHAR(100)        
        )`);

        await pool.query(`CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            email VARCHAR(100),
            password VARCHAR(20) 
            )`);
        
    } catch (err) {
        console.error("Error: ", err);
    }
}
DBConfig();

app.use(express.json());

app.get("/hello", (req, res) => {
    res.status(200).json({
        message: "Hello there"
    })
});

app.use("/tasks", require("./routes/tasks"));
app.use("/users", require("./routes/users"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on PORT : ${ PORT }`))