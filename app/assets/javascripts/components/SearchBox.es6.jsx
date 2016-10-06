class SearchBox extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault();
    var textArea = this.refs.searchBox;
    var query = "s="+ textArea.value +"&r=json"
    $.ajax({
      url: API + query
    })
    .done((response) =>{
      console.log(this.props)
      this.props.onSearchMovies(response);
    })
  }
  render(){
    return (
      <form id="search-form" onSubmit={this.handleSubmit}>
        <input ref="searchBox" id="search" type="text" name="query" placeholder="search"/>
        <button className="fa fa-search" type="submit"></button>
      </form>
    )
  }
}
