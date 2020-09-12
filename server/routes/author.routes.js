

// Author Controller
const AuthorControlller = require('../controllers/author.controller');

// routes
module.exports = function(app) {
    app.get('/api/authors', AuthorControlller.allAuthors);
    app.post('/api/authors/new', AuthorControlller.createAuthor);
    app.put('/api/authors/update/:_id', AuthorControlller.updateAuthor);
    app.delete('/api/authors/delete/:_id', AuthorControlller.deleteAuthor);
    app.get('/api/authors/:_id', AuthorControlller.getAuthor);
}