var Main = React.createClass({

  getInitialState: function() {
    return { resources: undefined};
  },
  // let resources = undefined;
  setResources: function(resources){
    // console.log(item);
    this.setState({ resources: resources });
    // this.state.
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
