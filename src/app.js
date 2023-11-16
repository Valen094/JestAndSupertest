import express from "express";
import {v4} from 'uuid'

const app = express();

app.use(express.json());
//cualquier peticion que llegue la convierte en un formato JSON

app.get('/ping', (req, res) =>{
    res.send('pong')
});

app.get('/tasks', (req, res) =>{
    res.json([]
        // {tasks: []}
        )
});

app.post('/tasks', (req, res) =>{
    const {title, description} = req.body;

    //valida si existe el titulo y descripción
    if (!title || !description) return res.sendStatus(400);

    res.json({
        title,
        description,
        id: v4(),
    });
});

export default app;