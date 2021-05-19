import * as mongoose from 'mongoose';
import validator from 'validator';

export interface UserInterface {
  name: string,
  lastName: string,
  age?: number,
  email: string,
  password: string,
}

export const UserSchema = new mongoose.Schema({
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
    unique: true,
    dropDups: true,
    validate: (value: string) => {
      if (!validator.isEmail(value)) {
        throw new Error('Email must be a valid email string');
      }
    },
  },
});

export const User = mongoose.model<UserInterface>('User', UserSchema);
