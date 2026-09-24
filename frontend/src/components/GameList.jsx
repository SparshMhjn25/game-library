export default function GameList({
  selectedGames,
  handleEditGameClick,
  handleDeleteGameClick
}) {
  return (
    <div>
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
          Collection
        </p>
        <h2 className="mt-1 text-3xl font-black tracking-wide text-white">
          Games
        </h2>
      </div>

      {selectedGames.length === 0 ? (
        <div className="rounded-xl border border-dashed border-green-500/20 bg-green-500/5 p-10 text-center">
          <p className="text-gray-400">
            Select a genre to explore your games.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selectedGames.map(game => (
            <div
              key={game.id}
              className="group relative overflow-hidden rounded-xl border border-green-500/20 bg-[#0b1911] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-green-500/10 blur-2xl transition-all duration-500 group-hover:bg-green-400/20" />

              <div className="relative">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-green-400">
                    {game.name}
                  </h3>

                  <span className="rounded-md border border-green-500/20 bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-400">
                    {game.platform}
                  </span>
                </div>

                <p className="mb-4 text-sm leading-6 text-gray-400">
                  {game.description}
                </p>

                <div className="mb-5 border-t border-white/5 pt-4">
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Developer
                  </p>
                  <p className="mt-1 font-medium text-gray-300">
                    {game.developer}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleEditGameClick(game.id)}
                    className="flex-1 rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-2 text-sm font-semibold text-green-400 transition-all duration-300 hover:bg-green-500 hover:text-black hover:shadow-[0_0_15px_rgba(34,197,94,0.35)]"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteGameClick(game.id)}
                    className="flex-1 rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-2 text-sm font-semibold text-red-400 transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}