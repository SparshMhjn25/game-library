const { Router } = require('express');
const genreRouter = Router();
const genreController = require('../controllers/genreController');

genreRouter.get('/', genreController.getAllGenreController);
genreRouter.get('/genres/:id', genreController.getGenreByIdController);
genreRouter.post('/create', genreController.insertGenreController);
genreRouter.get('/create', (req, res)=>{
    res.render('create');
})
genreRouter.get('/genres/:id/edit', genreController.editFormController);
genreRouter.post('/genres/:id/edit', genreController.updateGenreController);

genreRouter.post('/genres/:id/delete', genreController.deleteGenreController);

//React Routers
genreRouter.get('/api/genres', genreController.getAllGenreReactController);
genreRouter.post('/api/genres', genreController.insertGenreReactController);
genreRouter.put('/api/genre/:id', genreController.updateGenreReactController);
genreRouter.delete('/api/genres/:id', genreController.deleteGenreReactController);
module.exports = genreRouter;