const express = require ('express');
const router = express.Router();
const PostagensController = require ('../controllers/postagem');
const PostagemModel = require ('../models/postagem');

const postagensController = new PostagensController(PostagemModel);

router.get('/', async(req, res) =>{
    //busca postagem no banco de dados 
    const postagens = await postagensController.consultarTodos();
    res.send (postagens);
    
});

router.post('/', async(req, res)=>{
   // salva postagem no banco de dados
   const novaPostagem = req.body;
   const retorno = await postagensController.adicionar(novaPostagem); 
   res.send(retorno);

});

router.put('/:id', async(req, res)=>{
    const id = req.params.id;
    const postagensDTO = req.body;
    await postagensController.alterarId(id, postagemDTO); 
    res.send('Alterado com sucesso!');
});

router.delete('/:id', async(req, res)=>{
    const id = req.params.id;
    await postagemController.removerPorId(id);
    res.send('sucesso na remoção!') 
});



module.exports = router;