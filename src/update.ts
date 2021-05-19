import * as mongoose from 'mongoose';
import {User} from './helpers';

mongoose.connect('mongodb://127.0.0.1:27017/dsi-assignment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  User.updateOne({email: 'eebritosa@gmail.com'},
    {runValidators: true}).then((result) => {
      console.log(result.nModified);
    }).catch((error) => {
      console.log(error);
    });
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});
