import { useState, useEffect } from "react";
export const listMovies = [
  { id: 1, title: "Inception", genre: "Fantascienza" },
  { id: 2, title: "Il Padrino", genre: "Thriller" },
  { id: 3, title: "Titanic", genre: "Romantico" },
  { id: 4, title: "Batman", genre: "Azione" },
  { id: 5, title: "Interstellar", genre: "Fantascienza" },
  { id: 6, title: "Pulp Fiction", genre: "Thriller" },
];

export default function Main() {
  const [search, setSearch] = useState({
    genre: "",
  });

  const [filtered, setFiltered] = useState(listMovies);

  useEffect(() => {
    if (search.genre) {
      const filter = listMovies.filter((movie) => {
        return movie.genre.toLowerCase().includes(search.genre.toLowerCase());
      });
      setFiltered(filter);
    } else {
      setFiltered(listMovies);
    }
  }, [search.genre]);

  return (
    <main className="p-5">
      <div className="container my-5">
        <form className="d-flex my-5" role="search">
          <select
            value={search.genre}
            onChange={(e) => setSearch({ genre: e.target.value })}
            className="form-select"
            aria-label="Default select example"
          >
            <option value={""}>Tutti i Film</option>
            <option>Fantascienza</option>
            <option>Thriller</option>
            <option>Romantico</option>
            <option>Azione</option>
          </select>

          {/* value={search.genre} */}
        </form>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ">
          {filtered.map((movie) => {
            return (
              <div key={movie.id} className="col my-4">
                <div className="card ">
                  <div className="card-body">
                    <h1>{movie.title}</h1>
                    <span>Genere: {movie.genre}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
