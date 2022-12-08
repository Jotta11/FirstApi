const UserController = require('./Controllers/userController');


module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: UserController.createUser,
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.getUserById,
  },
  {
    endpoint: '/users/:id',
    method: 'PUT',
    handler: UserController.updateUser,
  },
  {
    endpoint: '/users/:id',
    method: 'DELETE',
    handler: UserController.deleteUser,
  },



  {
    endpoint: '/products',
    method: 'GET',
    handler: UserController.listProducts,
  },
  {
    endpoint: '/products',
    method: 'POST',
    handler: UserController.createProduct,
  },
  {
    endpoint: '/products/:id',
    method: 'PUT',
    handler: UserController.updateProduct,
  },
  {
    endpoint: '/products/:id',
    method: 'GET',
    handler: UserController.getProductById,
  },
  {
    endpoint: '/products/:id',
    method: 'DELETE',
    handler: UserController.deleteProduct,
  },
];

