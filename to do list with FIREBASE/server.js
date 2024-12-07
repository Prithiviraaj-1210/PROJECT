const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Use your MySQL password
    database: 'todo_app'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Fetch tasks
app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a task
app.post('/tasks', (req, res) => {
    const task = { text: req.body.text, completed: false };
    db.query('INSERT INTO tasks SET ?', task, (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, ...task });
    });
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    db.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (err) => {
        if (err) throw err;
        res.json({ message: 'Task deleted' });
    });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
