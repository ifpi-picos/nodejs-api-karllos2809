const mongoose = require ('mongoose');

const schema = new mongoose.Schema ({
    titulo: {
        tipe: String,
    },
    texto:{
        type: String,
    },
    dataAlteração:{
        type: Date,
        default: Date.now()
    },
    autor:{
        type: String
    }
});

const Postagem = mongoose.model('Postagem', schema);

module.exports = Postagem;