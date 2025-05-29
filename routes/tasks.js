const express = require("express");
const router = express.Router();

const pool = require("../config/db");

// Get all tasks
router.get("/", async (req, res) => {
    let resource;
    try {
        resource = await pool.query("SELECT * FROM tasks");
    } catch (err) {
        console.error("Error: ", err);
        return res.status(500).json({ error: "Something broke"});
    }
    res.json(resource.rows);
});

// Get task by id
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(result.rows[0])
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something broke"});
    }
});

// Add task
router.post("/", async (req, res) => {
    try {
        const { name, description } = req.body;
        const result = await pool.query("INSERT INTO tasks(name, description) VALUES ($1, $2) RETURNING *", [name, description]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Task not found"});
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Something broke"
        });
    }
});

// Update task
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        let result = await pool.query("UPDATE tasks SET name = $1, description = $2 WHERE id = $3 RETURNING *", [name, description, id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Task not found"})
        }

        res.json(result.rows[0])
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something broke"})
    }
});

// Delete task
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({message: "Task not found"})
        }

        res.json(result.rows[0])
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Internal Server Error"})
    }
});

module.exports = router;