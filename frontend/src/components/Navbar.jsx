export default function NavBar({ handleCreateGenreClick, handleHomeClick  }) {
  return (
    <nav className="flex h-20 items-center justify-between border-b border-green-500/20 bg-[#08130d]/95 px-8 shadow-[0_0_30px_rgba(34,197,94,0.08)] backdrop-blur-md">

      <div className="flex items-center gap-3">
        <div className="h-3 w-3 animate-pulse rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.9)]"></div>

        <h1 className="text-2xl font-black tracking-wider text-white">
          GAME<span className="text-green-400">LIBRARY</span>
        </h1>
      </div>

      <div className="flex items-center gap-8">
        <button onClick={handleHomeClick}
        className="font-medium text-gray-300 transition-colors duration-200 hover:text-green-400">
          Home
        </button>

        <button
          onClick={handleCreateGenreClick}
          className="rounded-lg border border-green-500/50 bg-green-500/10 px-5 py-2.5 font-semibold text-green-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-400 hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.45)]"
        >
          + Create Genre
        </button>
      </div>

    </nav>
  )
}