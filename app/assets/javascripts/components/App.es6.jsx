class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
    this.handleSearchMovies = this.handleSearchMovies.bind(this);
  }
  // componentDidMount(){
  //   $.ajax({
  //     url: 'movies/search'
  //   })
  //   .done((response) => {
  //     this.setState({ movies: response });
  //   })
  // }
  handleSearchMovies(movies) {
    this.setState({movies: movies.Search})
  }

  render(){
    return(
      <div className="container-body">
        <SearchBox onSearchMovies={this.handleSearchMovies}/>
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}
