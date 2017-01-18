var Main = React.createClass({

  getInitialState: function() {
    return { resources: undefined};
  },

  setResources: function(resources){
    this.setState({ resources: resources });
  },

  render: function() {
    if (this.state.resources){
      return(
      <Resources initialData={this.state.resources} />
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
