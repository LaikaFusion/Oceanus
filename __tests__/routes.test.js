const request = require('supertest');
const app = require('../app');

describe('Route Handlers', () => {
    describe('GET /', () => {
        it('responds with 200', async () => {
            const response = await request(app).get('/api/v1/animals');

            expect(response.status).toBe(200);
        });
    });
});