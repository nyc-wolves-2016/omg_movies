class Movie extends React.Component {
  render(){
    let { Title, Poster, Plot, Year , Actors} = this.props.data
      return (
        <div className="col-md-8" id="movie">
          <img className="img-rounded" src={ Poster }/>
          <h1 className="movie-title">{ Title }</h1>
          <p className="movie-year">{ Year }</p>
          <p className="movie-plot">{ Plot }</p>
          <p className="movie-actors">{ Actors}</p>
        </div>
      )
  }
}
