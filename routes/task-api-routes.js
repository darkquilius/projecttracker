const db = require('../models');

module.exports = (app) => {
    // GET route for all tasks
    app.get('/api/tasks', (req, res) => {
        db.Task.findAll({})
            .then((data) => res.json(data))
            .catch((err) => {
                if (err) throw err;
            });
    });

    // GET route for one task
    app.get('/api/tasks/:id', (req, res) => {
        db.Task.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((data) => res.json(data))
            .catch((err) => {
                if (err) throw err;
            });
    });

    // POST route for new task
    app.post('/api/tasks', (req, res) => {
        db.Task.create(req.body)
            .then((data) => res.json(data))
            .catch((err) => {
                if (err) throw err;
            });
    });

    // DELETE route for one task
    app.delete('/api/tasks/:id', (req, res) => {
        db.Task.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((data) => res.json(data))
            .catch((err) => {
                if (err) throw err;
            });
    });

    // PUT route for updating project
    app.put('/api/tasks', (req, res) => {
        console.log('Task Update: ', req.body);

        db.Task.update(req.body, {
            where: {
                id: req.body.id
            }
        })
            .then((data) => res.json(data))
            .catch((err) => {
                if (err) throw err;
            });
    });
};