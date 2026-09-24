require('dotenv').config();
const pool = require('../db/pool');

async function seed(){
    await pool.query("INSERT INTO genres (name, description) VALUES ('RPG', 'Role-playing Games'), ('Action', 'Fast-paced challenges requiring quick reflexes and real-time combat'), ('Action-Adventure', 'Blends intense combat and movement with puzzle-solving and story exploration'), ('FPS', 'First-Person Shooter'), ('Strategy', 'Emphasizes long-term planning, tactical combat, and careful resource management'), ('Simulation', 'Replicates real-world activities, systems, careers, or lifestyles')");
    await pool.query(`
    INSERT INTO games (name, description, developer, platform, genre_id)
    VALUES
    ('Elden Ring', 'Open-world action RPG set in the Lands Between.', 'FromSoftware', 'PC', 1),
    ('Doom Eternal', 'Fast-paced first-person shooter against demons.', 'id Software', 'PC', 4),
    ('The Witcher 3', 'Open-world RPG following the monster hunter Geralt of Rivia.', 'CD Projekt Red', 'PC', 1),
    ('God of War Ragnarök', 'Action-adventure journey through Norse mythology.', 'Santa Monica Studio', 'PlayStation', 3),
    ('Age of Empires IV', 'Real-time strategy game focused on building civilizations.', 'Relic Entertainment', 'PC', 5),
    ('The Sims 4', 'Life simulation game where players create and control characters.', 'Maxis', 'PC', 6),
    ('Hades', 'Roguelike action game about escaping the Underworld.', 'Supergiant Games', 'Nintendo Switch', 2),
    ('Cyberpunk 2077', 'Open-world RPG set in a futuristic dystopian city.', 'CD Projekt Red', 'Xbox', 1),
    ('DOOM', 'First-person shooter featuring intense demon-slaying combat.', 'id Software', 'PlayStation', 4);
`);

    await pool.end();
}

seed();

