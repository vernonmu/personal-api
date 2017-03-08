var user = require('../user');
var skillz = require('../skillz')
var secrets = require('../secrets.js')


module.exports = {

    index: function (req,res,next) {

      res.status(200).json(user);
    },

    name: function(req, res, next) {

        // res.status(200).json(req.params.name)
        res.status(200).json({ user: user.name });
    },
    location: function(req, res, next) {

        res.status(200).json({
            location: user.location
        });
    },

    occupations: function(req, res, next) {
        res.status(200).json({
            occupations: user.occupations
        });
    },

    latest: function(req, res, next) {
        var last = user.occupations[user.occupations.length - 1]
        res.status(200).json({
            occupations: last
        });

    },

    hobbies: function(req, res, next) {
        res.status(200).json({
            hobbies: user.hobbies
        })
    },

    hobbiesType: function(req, res, next) {
        let hobbiesArr = []
        var x = req.params.type

        var type = function() {

            user.hobbies.forEach(function (val, idx, arr) {
                if (val.type == x) {
                    hobbiesArr.push(val)
                }
                else {
                  return "no hobbies of that type"
                }
            })
            return hobbiesArr
        }

        res.status(200).json(type())
    },

    family: function(req,res,next) {

        res.status(200).json({family: user.family})
    },

    familyGender: function(req,res,next) {

      function genderChecker() {
        var result = []
        user.family.forEach(function (val,idx,arr) {
          if (val.gender == 'female') {

              result.push(val)
          }
        })

        return result
      }

      var women = user.family.filter(genderChecker)
      res.status(200).json(women)
    },

    restaurants: function(req,res,next) {

      res.status(200).json({restaurants: user.restaurants})
    },

    restaurantsName: function (req,res,next) {
      // console.log(req.params.name)
      var match;
      var searchTerm = req.params.name
      var uEat = user.restaurants

      for (var key in uEat[0]) {
        if (uEat[0].name == searchTerm) {
          match = uEat[0].name
        }

        else {
          match = "No match!"
        }
      }

      res.status(200).json({match})
    },

    occupations: function(req, res, next) {

      var result;
      if (req.query.order == 'asc') {
        result = user.occupations.sort()
      }

      if (req.query.order == 'desc') {
        result = user.occupations.sort()
        result = result.reverse()
      }

      if (!req.query.order) {
        result = user.occupations
      }

      res.status(200).json({occupations: result})
    },

    change: function (req,res) {

      user.name = req.body.name
      res.status(200).json(user)
    },

    changeLoc: function(req,res) {
      user.location = req.body.location
      res.status(200).json(user)
    },

    learn: function(req,res) {
      user.hobbies.push({name: req.body.hobbyname, type: req.body.hobbytype})

      res.status(200).json(user)
    },

    acquire: function(req,res) {
      user.occupations.push(req.body.occupations)
      res.status(200).json(user)
    },

    newplace: function(req,res) {
      user.restaurants.push({name: req.body.restaurants, rating: req.body.rating})
      res.status(200).json(user)
    },

    skills: function(req,res) {

      if (req.query.experience) {
          var filtered = skillz.filter(function(val,idx,arr) {
            return req.query.experience == val.experience
          })
          return res.status(200).json(filtered)
      }
      res.status(200).json(skillz)
    },

    skillz: function (req,res) {

    },

    birth: function (req, res) {

      user.family.push({name: req.body.name, relation: req.body.relation, gender: req.body.gender })
      res.status(200).json(user)
    },

    postSkillz: function(req,res) {
      skillz.push(req.body)
      res.status(200).json(skillz)
    },

    getSecrets: function (req,res) {

      res.status(200).json(secrets)
    },

    update: function(req, res, next) {
        //update
        res.status(200).json(user);
    },
    destroy: function(req, res, next) {
        // var splicedCar = cars.splice(req.param.id)
        // var deletedCar = splicedCar[0]
        res.status(200).json(deletedCar)
    }
};
