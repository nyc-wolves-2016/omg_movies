class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }
  render() {
    let { movies } = this.state;
    return (
      <div id="container-movies">
        <h3> Movies </h3>
        <ul className="list-movies">
          { movies.map((movie, i) =>
            <Movie key={ i } data={ movie }/>
          )}
        </ul>
      </div>
    )
  }
}
