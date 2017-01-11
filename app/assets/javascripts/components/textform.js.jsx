var TextForm = React.createClass({
  propTypes:{
    question: React.PropTypes.string,
    value: React.PropTypes.number,

  },
  
  render: function() {
    return(
      <div className="row">
        <div className="small-4 medium-2 columns">
          <div className="form-group">
            <label htmlFor='name'>
              <p>{this.props.question}</p>
              <input id='name' name='name' type='text'  />
            </label>
          </div>
        </div>
      </div>
    )
  }
});
