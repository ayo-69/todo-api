const express = require("express");
const router = express.Router();

const pool = require("../config/db");

// POST /users Creates a new user 
router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const result = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, password]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("Error creating user: ", err);
        res.status(500).json({ message: "Internal Server Error"});
    }
});

// GET /users/:id Gets a user by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({error: "User not found"});
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});
    }
});

module.exports = router;