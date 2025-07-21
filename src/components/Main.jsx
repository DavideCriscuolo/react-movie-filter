import { listMovies } from "./../data/listMovies";
import { useState, useEffect } from "react";

export default function Main() {
  const [search, setSearch] = useState({
    title: "",
  });

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     console.log(search);
  //   }
  const [filtered, setFiltered] = useState(listMovies);
  function handleSubmit(e) {
    e.preventDefault();
  }
  useEffect(() => {
    const filter = filtered.filter((movie) => {
      if (movie.title.includes(search.title)) {
        console.log(search.title);
        console.log(movie);
      } else {
        console.log("non trovato");
      }
    });
  }, [search.title]);

  //////////////////
  return (
    <main className="p-5">
      <div className="container my-5">
        <form onSubmit={handleSubmit} className="d-flex my-5" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            onChange={(e) => setSearch({ title: e.target.value })}
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
