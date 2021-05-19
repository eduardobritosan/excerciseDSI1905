import * as mongoose from 'mongoose';
import validator from 'validator';

mongoose.connect('mongodb://127.0.0.1:27017/dsi-assignment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

interface UserInterface {
  name: string,
  lastName: string,
  age?: number,
  email: string,
  password: string,
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Age must be positive.');
      }
    },
  },
  email: {
    type: String,
    required: true,
    validate: (value: string) => {
      if (!validator.isEmail(value)) {
        throw new Error('Email must be a valid email string');
      }
    },
  },
});

const User = mongoose.model<UserInterface>('User', UserSchema);

const user = new User({
  name: 'Eduardo',
  lastName: 'Brito',
  email: 'alu0100783315@ull.edu.es',
});

user.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
