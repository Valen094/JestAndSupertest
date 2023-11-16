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

describe('POST /tasks', () =>{
    describe('given a title and description', () =>{
        const newTask = {
            title: "Test Task",
            description: "Test Description"
        }

        test('should respond with a 200 status code', async () =>{
            const response = await request(app).post('/tasks').send(newTask);
            expect(response.statusCode).toBe(200);
        });
    
        test('should have a content-type: application/json in header', async () =>{
            const response = await request(app).post('/tasks').send(newTask);
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            //Que la respuesta que este dando sea igual a un JSON
        });
    
        test('should respond with an task ID', async () =>{
            const response = await request(app).post('/tasks').send(newTask);
            expect(response.body.id).toBeDefined();
            //body contiene el cuerpo de la petición
        })
    });

        //Comprueba si es titulo y la descripción existe
        describe('when title and description in missing', () =>{
        test('should erespond with a 400 status code', async () =>{
            const fields = [
                {},
                {title: 'Test Task'},
                {description: 'Test Description'},
            ]

            for(const body of fields) {
                const response = await request(app).post('/tasks').send(body)
                expect(response.statusCode).toBe(400);
            }

        });

    })
});