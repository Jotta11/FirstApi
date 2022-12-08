let users = require('../mocks/users');
let products = require('../mocks/products');

module.exports = {
  listUsers(request, response) {
    const { order } = request.query;

    const sortedUsers = users.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;

    });
    response.send(200, sortedUsers);
  },
  getUserById(request, response) {
    const { id } = request.params;

    const user = users.find((user) => user.id === Number(id));

    if (!user) {
      return response.send(400, { error: 'User not found' });
    }
    response.send(200, user);
  },
  createUser(request, response) {
    const { body } = request;
    const lastUserId = users[users.length - 1].id;

    const newUser = {
      id: lastUserId + 1,
      name: body.name,
    };

    users.push(newUser);

    response.send(200, newUser);
  },
  updateUser(request, response) {
    let { id } = request.params;
    const { name } = request.body;

    id = Number(id);

    const usersExists = users.find((user) => user.id === id);

    if (!usersExists) {
      return response.send(400, { error: 'user not found' })
    }

    users = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          name,
        };
      }
      return user;
    });
    response.send(200, { id, name });

  },
  deleteUser(request, response) {
    let { id } = request.params;
    id = Number(id);

    users = users.filter((user) => user.id !== id);
    response.send(200, { deleted: true });

  },


  listProducts(request, response) {
    const { order } = request.query;
    const sortedProducts = products.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;

    });
    response.send(200, sortedProducts);
  },

  getProductById(request, response) {
    const { id } = request.params;

    const product = products.find((product) => product.id === Number(id));

    if (!product) {
      return response.send(400, { error: 'Product not found' });
    }

    response.send(200, product);
  },

  createProduct(request, response) {
    const { body } = request;
    const lastProductId = products[products.length - 1].id;

    const newProduct = {
      id: lastProductId + 1,
      name: body.name,
    };

    products.push(newProduct);

    response.send(200, newProduct);
  },
  updateProduct(request, response) {
    let { id } = request.params;
    const { name } = request.body;

    id = Number(id);

    const productsExists = products.find((product) => product.id === id);

    if (!productsExists) {
      return response.send(400, { error: 'product  not found' })
    }

    products = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          name,
        };
      }
      return product;
    });
    response.send(200, { id, name });

  },
  deleteProduct(request, response) {
    let { id } = request.params;
    id = Number(id);

    products = products.filter((product) => product.id !== id);
    response.send(200, { deleted: true });

  },
};
