import Express from "express";

const app = Express()

app.get('/ping', (req, res) =>{
    res.send('pong')
});

app.get('/tasks', (req, res) =>{
    res.json([]
        // {tasks: []}
        )
});

export default app;