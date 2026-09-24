const queries = require('../db/queries');

async function getGameController(req, res){
    const id = req.params.id;
    const result = await queries.getGameById(id);
    res.render('gameDetail', { result: result });
} 

async function insertGameController(req, res){
    const genre_id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const developer = req.body.developer;
    const platform = req.body.platform;

    await queries.insertGame(name, description, developer, platform, genre_id);

    res.redirect(`/genres/${genre_id}`);
}

async function updateGameController(req, res){
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const developer = req.body.developer;
    const platform = req.body.platform;
    const genre_id = req.body.genre_id;

    await queries.updateGame(name, description, developer, platform, genre_id, id);
    res.redirect(`/games/${id}`);
}

async function renderEditGameController (req, res){
    const id = req.params.id;
    const result = await queries.getGameById(id);
    const genres = await queries.getAllGenres();
    res.render('gameEditForm', { result: result, genres: genres });
}

async function deleteGameController(req, res){
    const id = req.params.id;
    await queries.deleteGame(id);
    res.redirect(`/`);
}

//React Controllers
async function deleteGameReactController(req, res) {
  const id = req.params.id;

  await queries.deleteGame(id);

  res.json({ message: 'Game deleted successfully' });
}

async function getAllGamesReactController(req, res){
    const result = await queries.getAllGames();
    res.json(result);
}

async function createGameReactController(req, res){
    const genre_id = req.body.genre_id;
    const name = req.body.name;
    const description = req.body.description;
    const developer = req.body.developer;
    const platform = req.body.platform;
    
    const result = await queries.insertGame(name, description, developer, platform, genre_id);
    res.status(201).json(result);
}
async function updateGameReactController(req, res) {
    const id = req.params.id;
    const { name, description, developer, platform, genre_id } = req.body;

    const result = await queries.updateGame(
        name,
        description,
        developer,
        platform,
        genre_id,
        id
    );

    res.status(200).json(result);
}

module.exports = {
    getGameController,
    insertGameController,
    updateGameController,
    renderEditGameController,
    deleteGameController,
    getAllGamesReactController,
    createGameReactController,
    updateGameReactController,
    deleteGameReactController
}