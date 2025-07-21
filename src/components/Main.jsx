import { listMovies } from "./../data/listMovies";
import { useState, useEffect } from "react";

export default function Main() {
  const [search, setSearch] = useState({
    genre: "",
  });

  const [filtered, setFiltered] = useState(listMovies);

  function handleSubmit(e) {
    e.preventDefault();
    setSearch({ genre: e.target.value });
    console.log({ genre: e.target.value });
    console.log(handleSubmit);
  }
  useEffect(() => {
    if (search.genre) {
      const filter = filtered.filter((movie) => {
        if (movie.genre.toLowerCase().includes(search.genre.toLowerCase())) {
          console.log(`il genere  che hai ricercato è ${movie.genre}`);
          return true;
        }
      });

      setFiltered(filter);
    }
  }, [search.genre]);

  return (
    <main className="p-5">
      <div className="container my-5">
        <form onSubmit={handleSubmit} className="d-flex my-5" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            value={search.genre}
            onChange={(e) => setSearch({ genre: e.target.value })}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ">
          {listMovies.map((movie) => {
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
