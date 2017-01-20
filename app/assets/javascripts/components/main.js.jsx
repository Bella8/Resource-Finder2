var Main = React.createClass({

  getInitialState: function() {
    return { resources: undefined};
  },

  setResources: function(resources){
    this.setState({ resources: resources });
  },

  render: function() {
    if (this.state.resources){
      api_res = Object.entries(this.state.resources.api_resources)
      var items = api_res.map(function(item){
        return <ul key={item[0]}>
          <b><li>{item[0]}</li></b>
          <br/>
          <Resources  initialData={item[1]} />
        <br/>
        <br/>
      </ul>
    })

    url_res = Object.entries(this.state.resources.url_resources)
    var url = url_res.map(function(item){
      return <ul key={item[0]}>
        <b><li>{item[0]}</li></b>
        <a className="list-link" href={item[1]} target="_blank">{item[1]}</a>
        <br/>
        <br/>
      </ul>
    })

    return(
      <div className="row">
        <div className="small-12 small-centered medium-11 medium-centered large-11 large-centered columns ">
          <h4 className="text-center result-tile">Results</h4>
          <p className="text-center small-intro">Some programs may have additional eligiblitiy criteria not covered by the Resource Finder.  You should contact the program directly to determine your eligiblity.</p>
          <section>{url}</section>
          <br/>
          <section>{items}</section>
        </div>
      </div>
    )
  }
  else {
    return(
      <Form onSubmit={this.setResources}/>
    )
  };
}
});
//having a clear form to go back to the form.
