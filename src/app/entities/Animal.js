import { formatDistanceToNowStrict } from 'date-fns';

class Animal {
  constructor(name, dateOfBirth, type, weight) {
    this.name = name;
    this.age = formatDistanceToNowStrict(dateOfBirth, { unit: 'month' });
    this.type = type;
    this.weight = weight;
  }
}

export default Animal;
