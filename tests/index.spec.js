import app from '../src/app.js'
import request from 'supertest'

describe('GET /tasks', ()=>{

    //Deberia responder un estado 200
    test("should respond with a 200 status code", async ()=>{
        const response = await request(app).get("/tasks").send()
        // console.log(response);
        expect(response.statusCode).toBe(200);
    });

    //Deberia responder un arreglo
    test('should respond with an array', async() =>{
        const response = await request(app).get('/tasks').send();
        expect(response.body).toBeInstanceOf(Array)
        //permite comprobar si es un arreglo (Object, para objeto)
    });

});
