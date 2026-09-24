const pool = require('./pool');

async function getAllGenres(){
    const { rows } = await pool.query('SELECT * FROM genres');
    return rows;
}

async function getAllGames(){
    const { rows } = await pool.query('SELECT * FROM games');
    return rows;
}

async function getGenreById(id){
    const { rows } = await pool.query('SELECT * FROM genres WHERE id = $1', [id]);
    return rows[0];
}

async function getGamesByGenre(genreId){
    const { rows } = await pool.query('SELECT * FROM games WHERE genre_id = $1', [genreId]);
    return rows;
}

async function getGameById(id){
    const { rows } = await pool.query('SELECT * FROM games WHERE id = $1', [id]);
    return rows[0];
}

async function insertGenre(name, description){
    const { rows } = await pool.query('INSERT INTO genres (name, description) VALUES ($1, $2) RETURNING *', [name, description]);
    return rows[0];
}

async function updateGenre(name, description, id){
    const {rows} = await pool.query('UPDATE genres SET name = $1, description = $2 WHERE id = $3 RETURNING *', [name, description, id]);
    return rows[0];
}

async function deleteGenre(id){
    await pool.query('DELETE FROM genres WHERE id = $1', [id]);
}

async function insertGame(name, description, developer, platform, genre_id){
    const { rows } = await pool.query('INSERT INTO games (name, description, developer, platform, genre_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, description, developer, platform, genre_id]);
    return rows[0];
}

async function updateGame(name, description, developer, platform, genre_id, id){
    const {rows} = await pool.query('UPDATE games SET name = $1, description = $2, developer = $3, platform = $4, genre_id = $5 WHERE id = $6 RETURNING *', [name, description, developer, platform, genre_id, id]);
    return rows[0];
}

async function deleteGame(id){
    await pool.query('DELETE FROM games WHERE id = $1', [id]);
}

module.exports = {
    getAllGenres,
    getGenreById,
    getGamesByGenre,
    getGameById,
    insertGenre,
    updateGenre,
    deleteGenre,
    insertGame,
    updateGame,
    deleteGame,
    getAllGames
}
