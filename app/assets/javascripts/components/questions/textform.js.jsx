var TextForm = React.createClass({
  // typechecking on the props for this component
  propTypes:{
    header: React.PropTypes.string,
    question: React.PropTypes.string,
    value: React.PropTypes.number,
  },
  //update text as user types name and capture the value. name is the id.
  updateState: function (event) {
    this.props.onChange(this.props.name, event.target.value);
  },
  //capture the updated stated or typed value
  getValue: function() {
    return this.refs.textinput.value;
  },


  render: function() {
    return(
      <div>
        <div className="row">
          {this.props.header}
        </div>
        <div className="row">
          <div className="small-4 medium-2 columns">
            <div className="form-group">
              <label htmlFor='name'>
                <p>{this.props.question}</p>
                <input ref="textinput" id='name' name='name' type='text' maxLength="5" pattern= "[0-9]{5}" autoFocus="true" onChange={this.updateState} required="true" />
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
