var TextForm = React.createClass({
  propTypes:{
    header: React.PropTypes.string,
    question: React.PropTypes.string,
    value: React.PropTypes.number,
  },

  updateState: function (event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  },


  getValue: function() {
    // return this.refs.textinput.value;
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

                <input ref="textinput" id='name' name='name' type='text' onChange={this.updateState}  />

              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
