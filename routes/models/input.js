module.exports = (router, Group, Solo, FCM)=>{
  router.post('/groupM', async (req,res)=>{
    var pan = await Group.findOne({"group_id":req.body.group_id})
    var like = pan.num + 1;
    var result = await Group.update({"group_id": req.body.group_id},
    {"$push":{"multiple_choice" : {
      "subject" : req.body.subject,
      "question" : req.body.question,
      "name" : req.body.name,
      "answer" : req.body.answer,
      "example1" : req.body.example1,
      "example2" : req.body.example2,
      "example3" : req.body.example3,
      "example4" : req.body.example4,
      "example5" : req.body.example5,
    }},"$set":{"num": like}})
    res.send("success");
  })

  .post('/groupS', async (req,res)=>{
    var pan = await Group.findOne({"group_id":req.body.group_id})
    var like = pan.num + 1;
    var result = await Group.update({"group_id": req.body.group_id},
    {"$push":{"short_answer" : {
      "subject" : req.body.subject,
      "question" : req.body.question,
      "name" : req.body.name,
      "answer" : req.body.answer
    }},"$set":{"num": like}})
    res.send("success");
  })

  .post('/soloM', async (req,res)=>{
    var pan = await Solo.findOne({"group_id":req.body.group_id})
    var like = pan.num + 1;
    var result = await Solo.update({"group_id": req.body.group_id},
    {"$push":{"multiple_choice" : {
      "subject" : req.body.subject,
      "question" : req.body.question,
      "answer" : req.body.answer,
      "example1" : req.body.example1,
      "example2" : req.body.example2,
      "example3" : req.body.example3,
      "example4" : req.body.example4,
      "example5" : req.body.example5
    }},"$set":{"num": like}})
    res.send("success");
  })

  .post('/soloS', async (req,res)=>{
    var pan = await Solo.findOne({"group_id":req.body.group_id})
    var like = pan.num + 1;
    var result = await Solo.update({"group_id": req.body.group_id},
      {"$push":{"short_answer" : {
        "subject" : req.body.subject,
        "question" : req.body.question,
        "answer" : req.body.answer
      }},"$set":{"num": like}})
      res.send("success");
  })
  .post('/test', async (req,res)=>{
    var result = await Group.find()
    res.send(result);
  })
  return router;
}
