const { Router } = require('express');
const gameRouter = Router();

const gameController = require('../controllers/gameController');

gameRouter.get('/games/:id', gameController.getGameController);

gameRouter.post('/games/:id/create', gameController.insertGameController);
gameRouter.get('/games/:id/create', (req, res)=>{
    const genreId = req.params.id;
    res.render('createGame', { genreId: genreId });
})
gameRouter.get('/games/:id/edit', gameController.renderEditGameController);
gameRouter.post('/games/:id/edit', gameController.updateGameController);

gameRouter.post('/games/:id/delete', gameController.deleteGameController);

//React Routes
gameRouter.get('/api/games', gameController.getAllGamesReactController);
gameRouter.put('/api/games/:id', gameController.updateGameReactController);
gameRouter.post('/api/games', gameController.createGameReactController);

gameRouter.delete(
  '/api/games/:id',
  gameController.deleteGameReactController
);

module.exports = gameRouter;