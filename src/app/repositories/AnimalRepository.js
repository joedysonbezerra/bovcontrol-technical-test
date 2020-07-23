import Animals from '../models/animals';

class AnimalRepositoryMongo {
  async findOne(id) {
    const animal = await Animals.findById(id);
    return animal;
  }

  async update(id, body) {
    const animal = await Animals.findByIdAndUpdate(id, body, {
      new: true,
    });
    return animal;
  }

  async add({ name, age, type, weight }) {
    const animal = await Animals.create({ name, age, type, weight });
    return animal;
  }
}

export default new AnimalRepositoryMongo();
