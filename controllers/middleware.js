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
  }
}
