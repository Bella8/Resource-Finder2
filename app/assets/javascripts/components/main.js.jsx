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
        <div className="row">

          <div className="small-12 small-centered medium-11 medium-centered large-11 large-centered columns ">

          <h4 className="text-center result-tile">Results</h4>
          <p className="text-center small-intro">Some programs may have additional eligiblitiy criteria not covered by the Resource Finder.  You should contact the program directly to determine your eligiblity.</p>
  
          <ul>
            <li><b>Insurance or Snap Benefits:</b> {this.state.resources[0]}</li>
            <br/>
            <li><b>Child Care:</b> {this.state.resources[1]}</li>
            <br/>
            <li><b>Emergency Housing:</b></li>
            <br/>
            <Resources initialData={this.state.resources[2]} />
            <br/>
            <br/>
            <li><b>Domestic Violence Services:</b></li>
            <br/>
            <Resources initialData={this.state.resources[3]} />
            <br/>
            <br/>
            <li><b>Workforce Services:</b></li>
            <br/>
            <br/>
            <Resources initialData={this.state.resources[4]} />
          </ul>
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
