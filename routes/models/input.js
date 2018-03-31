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
    console.log(pan.D_day)
    if(like >= pan.randomNum){
      var serverKey = "AAAA75GQ0wI:APA91bHz67Vy7P2T5AqtWnpM0cGByi2Uu6NnlA4nAhK0fNHcJlLgPBqRKGoqdhd56N0MXtMmXU3YEsMA56jZHjBkJwPJ6v6ps1_4pG4VYVAv-cFry1w1XBobIBG60BRhTBTntFrBXr2f"
      var fcm = new FCM(serverKey);
      var message;
      message = {
        to: 'eVFr22oC0nA:APA91bEXLqRi6wVA9P0ijxl02mgR7e6HpkJvMX2fd-pDMYv-wKZJ7c_xMvRCJn1UbNl2bWYikOFVAB6Wsj92z2m9_cbS2qCBqnf5re_cy2iVuuIkQwOLGKwQ_wUOsfkxvaETZdZiWqlc',
        data: {
          D_day : pan.D_day
        }
      }
      fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!")
        } else {
            console.log("Successfully sent with response: ", response)
        }
      })
      message = {
        to: 'fa-nJor7aWs:APA91bG6LUSfTC9pOvuwPOEIDuY_VoavmY0pa1ylHlFU1FLex2gxNAi_GqfQg4wmXOnL4dq8bFMqcMwrZW2WvKvYcXt0ELsL6gyCInQ46oKN7LjZULZ6587-NxC0VlBoByKTMjAjrDMF',
        data: {
          D_day : pan.D_day
        }
      }
      fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!")
        } else {
            console.log("Successfully sent with response: ", response)
        }
      })
      message = {
        to: 'fZ9pmwebsgI:APA91bELcn48u99AAGrmp-ktHla5mJ1BROgmAZ73xjbq6yn-lOhqGPd1KTxAd6_ezSDcJvF9uhDQY_GpTagwpHzsR5BnIOMC8jSLJz7wCuCIA0yihbhQSTbl3tda59b6Amcru5O8nKRm',
        data: {
          D_day : pan.D_day
        }
      }
      fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!")
        } else {
            console.log("Successfully sent with response: ", response)
        }
      })
    }
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
    if(like >= pan.randomNum){
      var serverKey = "AAAA75GQ0wI:APA91bHz67Vy7P2T5AqtWnpM0cGByi2Uu6NnlA4nAhK0fNHcJlLgPBqRKGoqdhd56N0MXtMmXU3YEsMA56jZHjBkJwPJ6v6ps1_4pG4VYVAv-cFry1w1XBobIBG60BRhTBTntFrBXr2f"
      var fcm = new FCM(serverKey);
      var message = {
        to: 'cqLT6HRnuDQ:APA91bErdRNmO66kNiMgqBS3D9mkWLe0K5pO5Q1DIcpmG1gNIqwpNsohFVcLEDs0irrMhIZz6lHsfRryRKJ4wayD8CW_YyskXnouihW4vQyaKlkVb0LNP9nlqzDLr9oCezFBzRl29FW7',
        data: {
          D_day : pan.D_day
        }
      }
      fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!")
        } else {
            console.log("Successfully sent with response: ", response)
        }
      })
    }
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
    if(like >= pan.randomNum){
      var serverKey = "AAAA75GQ0wI:APA91bHz67Vy7P2T5AqtWnpM0cGByi2Uu6NnlA4nAhK0fNHcJlLgPBqRKGoqdhd56N0MXtMmXU3YEsMA56jZHjBkJwPJ6v6ps1_4pG4VYVAv-cFry1w1XBobIBG60BRhTBTntFrBXr2f"
      var fcm = new FCM(serverKey);
      var message = {
        to: 'cqLT6HRnuDQ:APA91bErdRNmO66kNiMgqBS3D9mkWLe0K5pO5Q1DIcpmG1gNIqwpNsohFVcLEDs0irrMhIZz6lHsfRryRKJ4wayD8CW_YyskXnouihW4vQyaKlkVb0LNP9nlqzDLr9oCezFBzRl29FW7',
        data: {
          D_day : pan.D_day
        }
      }
      fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!")
        } else {
            console.log("Successfully sent with response: ", response)
        }
      })
    }
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
      if(like >= pan.randomNum){
        var serverKey = "AAAA75GQ0wI:APA91bHz67Vy7P2T5AqtWnpM0cGByi2Uu6NnlA4nAhK0fNHcJlLgPBqRKGoqdhd56N0MXtMmXU3YEsMA56jZHjBkJwPJ6v6ps1_4pG4VYVAv-cFry1w1XBobIBG60BRhTBTntFrBXr2f"
        var fcm = new FCM(serverKey);
        var message = {
          to: 'cqLT6HRnuDQ:APA91bErdRNmO66kNiMgqBS3D9mkWLe0K5pO5Q1DIcpmG1gNIqwpNsohFVcLEDs0irrMhIZz6lHsfRryRKJ4wayD8CW_YyskXnouihW4vQyaKlkVb0LNP9nlqzDLr9oCezFBzRl29FW7',
          data: {
            D_day : pan.D_day
          }
        }
        fcm.send(message, function(err, response){
          if (err) {
              console.log("Something has gone wrong!")
          } else {
              console.log("Successfully sent with response: ", response)
          }
        })
      }
      res.send("success");
  })
  .post('/test', async (req,res)=>{
    var result = await Group.find()
    res.send(result);
  })
  return router;
}
