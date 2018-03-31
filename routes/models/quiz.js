module.exports = (router, Group, Solo)=>{
  router.post('/group', async (req,res)=>{
    var pan = await Group.findOne({"group_id":req.body.group_id})
    var arr = new Array()
    arr = arr.concat(arr,pan.multiple_choice[1]);
    arr = arr.concat(arr,pan.short_answer[3]);
    res.status(200).send(arr);
    console.log(arr[2])
  })
  .post('/solo', async (req,res)=>{
    var pan = await Solo.findOne({"group_id":req.body.group_id})
    var arr = new Array()
    arr = arr.concat(arr,pan.multiple_choice[1]);
    arr = arr.concat(arr,pan.short_answer[3]);
    res.status(200).send(arr);
    console.log(arr[2])
  })
  return router;
}
