export default function MovieSearch({
  search,
  setSearch,
  movieSearch,
  setPage,
}) {
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search !== e.target.value) {
      setPage(0);
    }

    console.log(search);
    movieSearch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleSearch} value={search} />
        <input
          className="btn btn--stretched btn--accent searchbutton"
          type="submit"
          title="search"
        />
      </form>
    </div>
  );
}
