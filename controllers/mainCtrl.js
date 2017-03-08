var user = require('../user');


module.exports = {

  name: function (req, res, next) {

    res.status(200).json({ user: user.name});
  },
  location: function (req, res, next) {

    res.status(200).json({location: user.location});
  },

  occupations: function (req,res,next) {
    res.status(200).json({occupations: user.occupations});
  },

  latest: function (req, res, next) {
    var last = user.occupations[user.occupations.length - 1]
    res.status(200).json({occupations: last });

  },

  hobbies: function (req,res,next) {
    res.status(200).json({hobbies: user.hobbies})
  },

  hobbiesType: function (req, res, next) {
    res.status(200).json(user.hobbies.filter(req.params.type))
  },

  update: function (req, res, next) {
    //update
    res.status(200).json(user);
  },
  destroy: function (req, res, next) {
    // var splicedCar = cars.splice(req.param.id)
    // var deletedCar = splicedCar[0]
    res.status(200).json(deletedCar)
  }
};
