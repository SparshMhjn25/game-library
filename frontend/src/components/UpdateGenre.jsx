import { useState } from 'react';

export default function UpdateGenre({
  genreToEdit,
  updateExistingGenre,
  removeGenreUpdateForm
}) {
  const [name, setName] = useState(genreToEdit.name);
  const [description, setDescription] = useState(genreToEdit.description);

  async function submitHandler(e) {
    e.preventDefault();

    const genreData = {
      name,
      description
    };

    const response = await fetch(
      `http://localhost:8080/api/genre/${genreToEdit.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(genreData)
      }
    );

    const data = await response.json();

    if (response.ok) {
      updateExistingGenre(data);
      removeGenreUpdateForm();
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#07110c] px-6 py-10">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-2xl rounded-2xl border border-green-500/20 bg-[#0b1911] p-8 shadow-[0_0_40px_rgba(34,197,94,0.08)]"
      >
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
            Library
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            Edit Genre
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Update the details of this genre.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-300">
              Genre Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-green-500/20 bg-black/20 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-500/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-300">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-32 w-full resize-none rounded-lg border border-green-500/20 bg-black/20 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-500/20"
            />
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            type="submit"
            className="flex-1 rounded-lg bg-green-500 px-5 py-3 font-bold text-black transition-all duration-300 hover:bg-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={removeGenreUpdateForm}
            className="rounded-lg border border-gray-700 px-5 py-3 font-semibold text-gray-300 transition-all duration-300 hover:border-gray-500 hover:bg-white/5 hover:text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}