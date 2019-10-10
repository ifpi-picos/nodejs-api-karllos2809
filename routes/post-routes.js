const express = require ('express');
const router = express.Router();

router.get('/', (req, res) =>{
    //busca postagem no banco de dados 
    res.send ('lista de postagens');

});

router.post('/', (req, res)=>{
   // salva postagem no banco de dados 
   res.send('postagem salva');

});

module.exports = router;