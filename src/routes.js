const bookController = require('./controller');
const bookRoutes = [
  {
    method: 'GET',
    path: '/books',
    handler: bookController.getBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: bookController.getBookById,
  },
  {
    method: 'POST',
    path: '/books',
    handler: bookController.storeBook,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: bookController.updateBook,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: bookController.removeBookId,
  },
];

module.exports = bookRoutes;
