const userController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Niramai!',
  }));

  // app.post('/api/register', userController.create);
  app.post('/api/register', userController.create);
  app.get('/api/users/list', userController.list);
  app.get('/api/users/:userId', userController.getUser);
  app.put('/api/users/:userId', userController.updateUser);
};
