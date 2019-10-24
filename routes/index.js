 const express = require ('express');
 const postrouter = require ('./post-routes');

 const router = express.Router();
 
 router.get ('/', (req, res) => {
     res.send('App está online:)!')
 });

 router.use('/postagens', postrouter);

   //router.use('/users', )



module.exports = router;