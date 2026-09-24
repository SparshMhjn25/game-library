import { useEffect, useState } from 'react'
import NavBar from './components/Navbar';
import GenreList from './components/GenreList';
import GameList from './components/GameList';
import CreateGame from './components/CreateGame';
import UpdateGame from './components/UpdateGame';
import CreateGenre from './components/CreateGenre';
import UpdateGenre from './components/UpdateGenre';

function App(){
  const [genres, setGenres] = useState([]);
  const [games, setGames] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [showCreateForm, setShow] = useState(false);
  const [editSelect, setEditSelect] = useState(null);
  const [showGenreForm, setShowGenreForm] = useState(false);
  const [genreIdEdit, setGenreIdEdit] = useState(null);

  const gameToEdit = games.find((game) => game.id === editSelect);
  const genreToEdit = genres.find(genre => genre.id === genreIdEdit);

  useEffect(() => {
    async function fetchGenreLink(){
      const response = await fetch('https://game-library-y3au.onrender.com/api/genres');
      const data = await response.json();
      setGenres(data);
    }

    fetchGenreLink();
  }, []);

  useEffect(() => {
    async function fetchGameLink(){
      const response = await fetch('https://game-library-y3au.onrender.com/api/games');
      const data = await response.json();
      setGames(data);
    }

    fetchGameLink();
  }, []);

  const selectedGames = games.filter(
    (game) => selectedGenre === game.genre_id
  );

  // CREATE GAME
  function updateGameState(newGame){
    setGames(prev => [...prev, newGame]);
  }

  // UPDATE GAME
  function updateExistingGame(updatedGame){
    setGames(prevGames =>
      prevGames.map(game =>
        game.id === updatedGame.id ? updatedGame : game
      )
    );
  }

  function handleGenreClick(id){
    setSelectedGenre(id);
  }

  function handleEditGameClick(id){
    setEditSelect(id);
  }

  function handleCreateFormClick(){
    setShow(true);
  }

  function handleRemoveCreateFormClick(){
    setShow(false);
  }

  function handleRemoveEditFormClick(){
    setEditSelect(null);
  }

  // DELETE GAME
  async function handleDeleteGameClick(id) {
    const response = await fetch(`https://game-library-y3au.onrender.com/api/games/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      setGames(prevGames =>
        prevGames.filter(game => game.id !== id)
      );
    }
  }

  // CREATE GENRE
  function handleCreateGenreClick(){
    setShowGenreForm(true);
  }

  function handleRemoveGenreFormClick(){
    setShowGenreForm(false);
  }

  function updateGenreState(newGenre){
    setGenres(prev => [...prev, newGenre]);
  }

  // UPDATE GENRE
  function handleGenreEditClick(id){
    setGenreIdEdit(id);
  }

  function updateExistingGenre(updatedGenre){
    setGenres(prevGenre => 
      prevGenre.map(genre =>
        genre.id === updatedGenre.id ? updatedGenre : genre
      )
    );
  }

  function removeGenreUpdateForm(){
    setGenreIdEdit(null);
  }

  function handleHomeClick() {
    setSelectedGenre(null);
    setShow(false);
    setEditSelect(null);
    setShowGenreForm(false);
    setGenreIdEdit(null);
  }

  // DELETE GENRE
  async function handleGenreDeleteClick(id){
    const response = await fetch(`https://game-library-y3au.onrender.com/api/genres/${id}`, {
      method: 'DELETE'
    });

    if(response.ok){
      setGenres(prev => prev.filter(genre => genre.id !== id));
    }
  }

  // UPDATE GENRE SCREEN
  if(genreIdEdit !== null && genreToEdit){
    return(
      <div className="relative min-h-screen overflow-hidden bg-[#07110c] text-white">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-96 w-96 animate-[float_8s_ease-in-out_infinite] rounded-full bg-green-500/10 blur-3xl" />

          <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] animate-[floatReverse_10s_ease-in-out_infinite] rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 animate-[float_12s_ease-in-out_infinite] rounded-full bg-green-600/10 blur-3xl" />
        </div>

        <div className="relative z-10">
          <NavBar />

          <UpdateGenre 
            genreToEdit={genreToEdit}
            updateExistingGenre={updateExistingGenre}
            removeGenreUpdateForm={removeGenreUpdateForm}
          />
        </div>

      </div>
    )
  }

  // UPDATE GAME SCREEN
  if(editSelect !== null && gameToEdit){
    return(
      <div className="relative min-h-screen overflow-hidden bg-[#07110c] text-white">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-96 w-96 animate-[float_8s_ease-in-out_infinite] rounded-full bg-green-500/10 blur-3xl" />

          <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] animate-[floatReverse_10s_ease-in-out_infinite] rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 animate-[float_12s_ease-in-out_infinite] rounded-full bg-green-600/10 blur-3xl" />
        </div>

        <div className="relative z-10">
          <NavBar />

          <UpdateGame
            gameToEdit={gameToEdit}
            updateExistingGame={updateExistingGame}
            handleRemoveEditFormClick={handleRemoveEditFormClick}
          />
        </div>

      </div>
    )
  }

  // CREATE GAME SCREEN
  if(showCreateForm === true){
    return(
      <div className="relative min-h-screen overflow-hidden bg-[#07110c] text-white">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-96 w-96 animate-[float_8s_ease-in-out_infinite] rounded-full bg-green-500/10 blur-3xl" />

          <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] animate-[floatReverse_10s_ease-in-out_infinite] rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 animate-[float_12s_ease-in-out_infinite] rounded-full bg-green-600/10 blur-3xl" />
        </div>

        <div className="relative z-10">
          <NavBar />

          <div className="flex">
            <aside className="min-h-[calc(100vh-80px)] w-64 border-r border-green-500/20 bg-[#0a1710]/90 p-5">
              <GenreList
                genres={genres}
                handleGenreClick={handleGenreClick}
                handleGenreEditClick={handleGenreEditClick}
                handleGenreDeleteClick={handleGenreDeleteClick}
              />
            </aside>

            <main className="flex-1">
              <CreateGame
                genre_id={selectedGenre}
                handleRemoveCreateFormClick={handleRemoveCreateFormClick}
                updateGameState={updateGameState}
              />
            </main>
          </div>
        </div>

      </div>
    )
  }

  // CREATE GENRE SCREEN
  if(showGenreForm === true){
    return(
      <div className="relative min-h-screen overflow-hidden bg-[#07110c] text-white">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-96 w-96 animate-[float_8s_ease-in-out_infinite] rounded-full bg-green-500/10 blur-3xl" />

          <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] animate-[floatReverse_10s_ease-in-out_infinite] rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 animate-[float_12s_ease-in-out_infinite] rounded-full bg-green-600/10 blur-3xl" />
        </div>

        <div className="relative z-10">
          <NavBar />

          <CreateGenre
            handleRemoveGenreFormClick={handleRemoveGenreFormClick}
            updateGenreState={updateGenreState}
          />
        </div>

      </div>
    )
  }

  // MAIN SCREEN
  return(
    <div className="relative min-h-screen overflow-hidden bg-[#07110c] text-white">

      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 animate-[float_8s_ease-in-out_infinite] rounded-full bg-green-500/10 blur-3xl" />

        <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] animate-[floatReverse_10s_ease-in-out_infinite] rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 animate-[float_12s_ease-in-out_infinite] rounded-full bg-green-600/10 blur-3xl" />
      </div>

      <div className="relative z-10">

        <NavBar
          handleCreateGenreClick={handleCreateGenreClick}
          handleHomeClick={handleHomeClick}
        />

        <div className="flex">

          <aside className="min-h-[calc(100vh-80px)] w-64 border-r border-green-500/20 bg-[#0a1710]/90 p-5">
            <GenreList
              genres={genres}
              handleGenreClick={handleGenreClick}
              handleGenreEditClick={handleGenreEditClick}
              handleGenreDeleteClick={handleGenreDeleteClick}
            />
          </aside>

          <main className="flex-1 p-8">

            <GameList
              selectedGames={selectedGames}
              handleEditGameClick={handleEditGameClick}
              handleDeleteGameClick={handleDeleteGameClick}
            />

            {
              selectedGenre !== null &&
              <button
                onClick={handleCreateFormClick}
                className="mt-8 rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]"
              >
                + Create Game
              </button>
            }

          </main>

        </div>

      </div>

    </div>
  )
}

export default App;