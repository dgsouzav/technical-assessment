const request = require('supertest');
const User = require('./models/user');

describe('Teste do meu server', () => {
    it('should get main route', async () => {
        const res = await request('http://localhost:3000').get('/')
        
        expect(res.statusCode).toEqual(200)
    })
})