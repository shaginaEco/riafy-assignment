var express = require('express');
var router = express.Router();
var db=require('../mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {
    var sql = `select * from bookmarks;`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
      
        res.send(result);

      })
    //   res.send([]);

});

router.post('/', function(req, res, next) {
    const title= req.body.title;
    var url = req.body.url;
    var date = new Date();
   
    console.log(req.body,req.params)

    var sql = `INSERT INTO bookmarks (title,url,date) VALUES ("${title}", "${url}",NOW())`;
    console.log(sql)
    db.query(sql, function(err, result) {
      if (err) throw err;
      console.log('record inserted',req.body.title);
      res.send(title);
    });
  });

module.exports = router;
