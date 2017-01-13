var SelectForm = React.createClass({
  propTypes:{
    name: React.PropTypes.string,
    question: React.PropTypes.string,
    answers: React.PropTypes.arrayOf(React.PropTypes.string),
    value: React.PropTypes.string
  },

  getValue: function() {
    // return this.props.value;
    // console.log(this.props.value);
    // return this.refs.radioselect.value
    return this.state.value
  },

  handleChange: function (event) {
    this.props.onChange(this.props.name, event.target.value);
    //this.setState({value: event.target.value});
    console.log(event.target.value);
  },

  render: function() {
    var props = this.props;
    var thisName = this.props.name;
    console.log(props);
    console.log(thisName);
    var change = this.handleChange;

    var answerElements = this.props.answers.map(function(answer, i){
      return(
        <div key={i} className="row">
          <div className="small-12 medium-12 columns">
            <li><input onClick={change} type="radio" name={props.name} value={answer} ref="radioselect" id={i} /><label>{answer}</label></li>
          </div>
        </div>
      )
    });

    return(
      <div>
        <div className="row">
          {this.props.header}
        </div>
        <div className="row">
          <div className="small-12 medium-8 columns">
            <fieldset className="RadioSet">

              <legend>{this.props.question}</legend>

              <ul>{answerElements}</ul>

            </fieldset>
          </div>
        </div>
      </div>
    )
  }
});
