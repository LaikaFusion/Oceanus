const request = require('supertest');
const app = require('../app');

describe('Route Handlers', () => {
    describe('GET /api/v1/animals', () => {
        it('responds with 200', async () => {
            const response = await request(app).get('/api/v1/animals');

            expect(response.status).toBe(200);
        });

        it('responds with an object', async () => {
            const response = await request(app).get('/api/v1/animals');

            expect(typeof response.body).toBe('object');
        });
    });

    describe('GET api/v1/animals/:species', () => {
        it('responds with 200', async () => {
            const response = await request(app).get('/api/v1/animals/brachiopods');

            expect(response.status).toBe(200);
        });

        it('responds with an object', async () => {
            const response = await request(app).get('/api/v1/animals/brachiopods');
            
            expect(typeof response.body).toBe('object');
        });

        it(`responds with 404 if species doesn't exist`, async () => {
            const response = await request(app).get('/api/v1/animals/foo');

            expect(response.status).toBe(404);
        });
    })
});