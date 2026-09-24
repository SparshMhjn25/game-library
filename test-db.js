require('dotenv').config();
const queries = require('./db/queries');
const pool = require('./db/pool');
async function allqueries(){
    const query_1 = await queries.getAllGenres();
    console.log(query_1);
    const query_2 = await queries.getGenreById(2);
    console.log(query_2);
    const query_3 = await queries.getGameById(4);
    console.log(query_3);
    const query_4 = await queries.getGamesByGenre(1);
    console.log(query_4);

    await pool.end();
}

allqueries();
