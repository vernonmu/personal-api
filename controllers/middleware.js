module.exports = {
  addHeader: function (req,res,next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*',
      'Access-Control-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
    next();
  },


  generateId: function (req,res,next) {

    var dyId = Math.floor(Math.random()*1200000);
    req.body.id = dyId
    dyId++

    next();
  },

  verifyUser: function (req, res, next) {

    if (req.params.username == "boss" && req.params.pin == 0999) {

      next();
    }

    else {
      return res.status(400).json({message: "you do not have the keys to the kingdom, fool"})
    }

  }

}
