import request from 'supertest';
import { connect, disconnect } from 'mongoose';

import { MongoMemoryServer } from 'mongodb-memory-server';
import { flags } from '../config/database';
import app from '../App';

describe('Animals - Integration', () => {
  let mongoServer;
  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    connect(await mongoServer.getUri(), flags);
  });

  afterAll(async (done) => {
    disconnect(done);
    await mongoServer.stop();
  });

  it('Should be able to create a new animal and save to mongodb', async () => {
    const response = await request(app).post('/animals').send({
      name: 'any_name',
      dateOfBirth: '2014-07-02T03:00:00.000Z',
      type: 'cow',
      weight: 100,
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
  });
});
