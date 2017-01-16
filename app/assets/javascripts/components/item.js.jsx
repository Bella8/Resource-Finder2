var Item = React.createClass({
  // getInitialState() {
  //       return {editable: false}
  //   },
  // handleEdit() {
  //      console.log('edit button clicked')
  //     // this.setState({!this.state.editable})
  //  },
  // var caseid = this.state.editable ? <input type='text' defaultValue={this.props.item.caseid} /> : <h3>{this.props.item.caseid}</h3>;
  // var description = this.state.editable ? <input type='text' defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;
  render() {
    return (
      <div>
        <p><b>Case ID:</b> {this.props.item.caseid}</p>
        <p><b>Zip code:</b> {this.props.item.zip}</p>
        <p><b>Housing type:</b> {this.props.item.housing}</p>
        <p><b>Victim of domestic violence:</b> {this.props.item.dv}</p>
        <p><b>Employment status:</b> {this.props.item.employment}</p><b>Have health insurance:</b>
        <p>{this.props.item.insurance}</p>
        <p><b>Receive SNAP benefits:</b> {this.props.item.snap}</p>
        <p><b>Have Child (or children): </b> {this.props.item.child}</p>
         <button onClick={this.props.handleDelete} >Delete</button> <button onClick={this.props.handleEdit}> Edit </button>
      </div>
    )
  }
});
