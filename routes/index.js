 const express = require ('express');
 const postrouter = require ('/ postRouter');

 
 router.get ('/', (req, res) => {
     res.send('App está online:)!')
 });

 router.use('/postagens', postagemRoutes);

   //router.use('/users', )



module.exports = router;