//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://root:root@ds147044.mlab.com:47044/heroku_w78mxshr',
  }, 
  googleMaps: {
    key: 'AIzaSyDY8_g992gMYw8BdIYzu1Fjov0u097n3uA'
  },
  port: process.env.PORT
};