import * as mongoose from 'mongoose';
import {User} from './helpers';

const user = new User({
  name: 'Eduardo',
  lastName: 'Brito',
  email: 'alu0100783315@ull.edu',
});

mongoose.connect('mongodb://127.0.0.1:27017/dsi-assignment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  user.save().then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});
