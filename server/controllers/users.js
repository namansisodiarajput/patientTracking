const User = require('../models').User;

module.exports = {
  create(req, res) {
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
};
