const express = require ('express');
const router = express.Router();
const PostagensController = require ('../controller/postagens');
const PostagensModel = require ('../models/postagens');

const postagensController = new PostagensController(PostagemModel);

router.get('/', (req, res) =>{
    //busca postagem no banco de dados 
    const postagens = awaitpostagensController.consultarTodos();
    res.send ('lista de postagens');
    
});

router.post('/', (req, res)=>{
   // salva postagem no banco de dados
   const novaPostagem = req.body;
   const retorno = await postagensController.adicionar(novaPostagem); 
   res.send('postagem salva');

});

module.exports = router;