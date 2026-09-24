export default function GenreList({
  genres,
  handleGenreClick,
  handleGenreEditClick,
  handleGenreDeleteClick
}) {
  return (
    <div className="space-y-2">

      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
          Library
        </p>
        <h2 className="mt-1 text-xl font-black tracking-wide text-white">
          Genres
        </h2>
      </div>

      {genres.map(genre => (
        <div
          key={genre.id}
          className="group flex items-center justify-between rounded-lg border border-transparent px-3 py-3 transition-all duration-300 hover:border-green-500/30 hover:bg-green-500/10"
        >
          <button
            onClick={() => handleGenreClick(genre.id)}
            className="flex-1 text-left font-medium text-gray-300 transition-colors duration-200 group-hover:text-green-400"
          >
            {genre.name}
          </button>

          <div className="flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <button
              onClick={() => handleGenreEditClick(genre.id)}
              className="rounded-md px-2 py-1 text-xs font-semibold text-gray-400 transition-colors hover:bg-green-500/20 hover:text-green-400"
            >
              Edit
            </button>

            <button
              onClick={() => handleGenreDeleteClick(genre.id)}
              className="rounded-md px-2 py-1 text-xs font-semibold text-gray-400 transition-colors hover:bg-red-500/20 hover:text-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

    </div>
  )
}