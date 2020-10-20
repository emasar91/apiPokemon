const mongoose = require('mongoose');
const CONFIG = require('../../config/config');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
module.exports = {
  connection: null,
  connect: function () {

    if (this.connection) {

      return this.connection

    } else {

      return mongoose.connect(CONFIG.DB).then(connection => {
        this.connection = connection;
      }).catch(error => console.log(error));
    }
  }
}