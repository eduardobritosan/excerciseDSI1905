import * as mongoose from 'mongoose';
import 'mocha';
import {expect} from 'chai';
import {User} from '../src/helpers';


describe('Mongoose testing', () => {
  const user = new User({
    name: 'Eduardo',
    lastName: 'Brito',
    email: 'test@email.com',
  });
  it('Should be able to create correctly an user', () => {
    mongoose.connect('mongodb://127.0.0.1:27017/dsi-assignment', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }).then(() => {
      user.save().then((result) => {
        expect(result.name).to.equal(user.name);
        expect(result.lastName).to.equal(user.lastName);
        expect(result.email).to.equal(user.email);
        expect(result.age).to.equal(0);
      }).catch((error) => {
        console.log(error);
      });
    }).catch(() => {
      console.log('Something went wrong when conecting to the database');
    });
  });
  it('Should be able to find correctly an user', () => {
    mongoose.connect('mongodb://127.0.0.1:27017/dsi-assignment', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }).then(() => {
      User.find({email: 'test@gmail.com'}).then((result) => {
        expect(result).to.exist;
      }).catch((error) => {
        console.log(error);
      });
    }).catch(() => {
      console.log('Something went wrong when conecting to the database');
    });
  });
  it('Should be able to update correctly an user', () => {
    mongoose.connect('mongodb://127.0.0.1:27017/dsi-assignment', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }).then(() => {
      User.updateOne({email: 'test@gmail.com'},
        {runValidators: true}).then((result) => {
          expect(result.nModified).to.equal(1);
        }).catch((error) => {
          console.log(error);
        });
    }).catch(() => {
      console.log('Something went wrong when conecting to the database');
    });
  });
  it('Should be able to delete correctly an user', () => {
    mongoose.connect('mongodb://127.0.0.1:27017/dsi-assignment', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }).then(() => {
      User.deleteOne({email: 'test@gmail.com'}).then((result) => {
        expect(result.deletedCount).to.equal(1);
      }).catch((error) => {
        console.log(error);
      });
    }).catch(() => {
      console.log('Something went wrong when conecting to the database');
    });
  });
});
