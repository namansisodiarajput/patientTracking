const User = require('../models').User;

module.exports = {

  create(req, res) {
    console.log(req.body);
    return User
      .create({
        name: req.body.name,
        address: req.body.address,
        mobileNumber: req.body.mobileNumber,
        emailId: req.body.emailId,
        password: req.body.password,
        latitude: req.body.latitude,
        longitude: req.body.longitude
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  getUser(req, res) {
      return User
        .findByPk(req.params.userId)
        .then(user => {
          if (!user) {
            return res.status(404).send({
              message: 'User Not Found',
            });
          }
          return res.status(200).send(user);
        })
        .catch(error => res.status(400).send(error));
  },

  updateUser(req, res) {
      return User
        .findByPk(req.params.userId)
        .then(user => {
          if (!user) {
            return res.status(404).send({
              message: 'User Not Found',
            });
          }
          return user
            .update({
              name: req.body.name || user.name,
              address: req.body.address || user.address,
              mobileNumber: req.body.mobileNumber || user.mobileNumber,
              emailId: req.body.emailId || user.emailId,
              password: req.body.password || user.password,
              latitude: req.body.latitude || user.latitude,
              longitude: req.body.longitude || user.longitude
            })
            .then(() => res.status(200).send(user))  // Send back the updated todo.
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

  list(req, res) {
    console.log(User);
    return User
      .findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
};
