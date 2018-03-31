module.exports = (router, Group, Solo)=>{
  router.post('/', async (req,res)=>{
    var result = await Group.update({"group_id": req.body.group_id},
    {"$push":{"fcm_key" : {
      key : req.body.fcmKey
    }}})
    console.log(req.body.fcmKey)
    res.send('success!!');
  })
  return router;
}
