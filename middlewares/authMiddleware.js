const jwt = require('jsonwebtoken');

// const checkCurrentUser = async (req, res) => {
//     const token = req.body.token;
//     if(token){
//         jwt.verify(token, 'temporary secret key', async (err, decodedToken) => {
//             if(err){
//                 res.send(err);
//                 next();
//             }else{
//                 res.send(decodedToken);
//             }
//         });
//     }else{
//         res.send('No token');
//     }
// }