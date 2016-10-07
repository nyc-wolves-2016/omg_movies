class MovieList extends React.Component {
  render() {
    let { movies } = this.props;
    return (
      <div id="container-movies">
        <h3> Movies </h3>
          {movies.map((movie, i) =>
            <Movie key={i} data={movie}/>
          )}
      </div>
    )
  }
}
