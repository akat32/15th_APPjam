module.exports = (express, Group, Solo, rndstring, FCM)=>{
  var router = express.Router();

  var auth = require('./models/auth')(express.Router(), Group, Solo, rndstring);
  router.use('/auth', auth);
  var quiz = require('./models/quiz')(express.Router(), Group, Solo);
  router.use('/quiz', quiz);
  var input = require('./models/input')(express.Router(), Group, Solo,FCM);
  router.use('/input', input);


  return router;
}
