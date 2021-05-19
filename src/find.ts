import * as mongoose from 'mongoose';
import {User} from './helpers';

mongoose.connect('mongodb://127.0.0.1:27017/dsi-assignment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  User.find({email: 'alu0100783315@ull.edu.es'}).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});
