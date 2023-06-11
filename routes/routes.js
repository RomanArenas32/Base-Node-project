const  {Router} = require('express');
const { getUsers, postUsers, putUsers, deleteUsers } = require('../controllers/user');

const routes = Router();


routes.get('/', getUsers);
routes.post('/', postUsers);
routes.put('/:id', putUsers);
routes.delete('/:id', deleteUsers);

module.exports = routes;