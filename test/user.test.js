// Os testes não irão rodar por conta de não estar completo
// há erros que não consegui arrumar

const request = require('supertest');
// Request para usar o Jest
const app = require('..src/models/user');
// Request para importar os dados da API para teste

describe('Teste do meu server', () => {
    it('Deve pegar a rota primaria', async () => {
        //
        const res = await request('User').get('/')
        // 
        expect(res.statusCode).toEqual(200)
        // 
    })
})