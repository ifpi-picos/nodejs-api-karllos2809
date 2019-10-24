const mongoose = require ('mongoose');

function conectaMongoDb(){
    mongoose.connect(
        'mongodb://web12345@ds135128.mlab.com:35128/aula-web',
        {userUnifieldTopology: true, userNewUrParser: true}
);

const db = mongoose.connection;

db.on ('error', console.error.bind(console, 'connection error:'));

db.once('open', ()=> console.info('MongoDB conectado com sucesso!'));

}

module.exports = conectaMongoDb;