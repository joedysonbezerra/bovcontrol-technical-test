/* eslint-disable no-underscore-dangle */
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
  it('Should be able find the animal in collection of mongodb', async () => {
    const animal = await request(app).post('/animals').send({
      name: 'any_name',
      dateOfBirth: '2014-07-02T03:00:00.000Z',
      type: 'cow',
      weight: 100,
    });
    const response = await request(app).get(`/animals/${animal.body._id}`);

    expect(response.status).toBe(200);
    expect(response.body._id).toBe(animal.body._id);
    expect(response.body.name).toBe(animal.body.name);
    expect(response.body.age).toBe(animal.body.age);
    expect(response.body.type).toBe(animal.body.type);
    expect(response.body.weight).toBe(animal.body.weight);
  });
});
