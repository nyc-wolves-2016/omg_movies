class SearchBox extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    var textArea = this.refs.searchBox;
    var query = "s="+ textArea.value +"&r=json"
    var api = "http://www.omdbapi.com/?"
    $.ajax({
      url: api + query
    })
    .done((response) => {
      textArea.value = '';
      this.props.onSearchMovies(response);
    });
  }
  render(){
    return (
      <div className="top-nav">
        <header id="top-nav">
          <div id="site-name">
            <h1 className="logo">Omg Movies</h1>
          </div>
          <form id="search-form" onSubmit={this.handleSubmit}>
          <input ref="searchBox" id="search" type="text" name="query" placeholder="search"/>
          <button className="fa fa-search" type="submit"></button>
          </form>
        </header>
      </div>
    )
  }
}
