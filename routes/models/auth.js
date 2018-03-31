module.exports = (router, Group, Solo, rndstring)=>{
  router.post('/group', async (req,res)=>{
    var new_group = new Group(req.body);
    new_group.group_id = rndstring.generate(6);
    new_group.num = 0;
    new_group.randomNum = Math.floor(Math.random() * 3) + 2;
    var result = await new_group.save();
    res.status(200).json({id : new_group.group_id});
  })
  .post('/solo', async (req,res)=>{
    var new_solo = new Solo(req.body);
    new_solo.group_id = rndstring.generate(15);
    var result = await new_solo.save();
    res.status(200).json({id : new_solo.group_id});
  })
  return router;
}
