class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }
  componentDidMount(){
    $.ajax({
      url: "http://www.omdbapi.com/?t=Frozen&y=&plot=short&r=json"
    })
    .done((response) => {
      // grab the state array that already exists
      // because in the future it will be filled with movies
      // shovel in the response to the array
      // then setState to the newly made array with the reponse pushed on the end
      let { movies } = this.state;
      movies.push(response);
      this.setState({ movies });
    })
  }
  render() {
    let { movies } = this.state;
    return (
      <div id="container-movies">
        <h3> Movies </h3>
          {movies.map((movie, i) =>
            <Movie key={ i } data={ movie }/>
          )}
      </div>
    )
  }
}
