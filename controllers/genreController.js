const queries = require('../db/queries');

async function getAllGenreController(req, res){
    const result = await queries.getAllGenres();
    res.render('index', { result:result });
}

async function getGenreByIdController(req, res){
    const id = req.params.id;
    const result = await queries.getGenreById(id);
    const games = await queries.getGamesByGenre(id);
    res.render('genreDetail', { result: result, games: games });
}

async function insertGenreController(req, res){
    const name = req.body.name;
    const description = req.body.description;

    await queries.insertGenre(name, description);
    res.redirect('/');
}

async function updateGenreController(req, res){
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;

    await queries.updateGenre(name, description, id);
    res.redirect(`/genres/${id}`);
}

async function editFormController(req, res){
    const id = req.params.id;
    const result = await queries.getGenreById(id);
    res.render('Edit', { result: result })
}

async function deleteGenreController(req, res){
    const id = req.params.id;
    await queries.deleteGenre(id);
    res.redirect('/');
}


//React Controllers

async function getAllGenreReactController(req, res){
    const result = await queries.getAllGenres();
    res.json(result);
}

async function insertGenreReactController(req, res){
    const name = req.body.name;
    const description = req.body.description;

    const response = await queries.insertGenre(name, description);
    res.status(201).json(response);
}

async function updateGenreReactController(req, res){
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;

    const result = await queries.updateGenre(name, description, id);
    res.status(201).json(result);
}

async function deleteGenreReactController(req, res){
    const id = req.params.id;
    await queries.deleteGenre(id);
    res.status(200).json({ message: 'Genre deleted successfully' });
}

module.exports = {
    getAllGenreController,
    getGenreByIdController,
    insertGenreController,
    updateGenreController,
    editFormController,
    deleteGenreController,
    getAllGenreReactController,
    insertGenreReactController,
    updateGenreReactController,
    deleteGenreReactController
}