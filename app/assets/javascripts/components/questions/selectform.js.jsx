var SelectForm = React.createClass({
  // typechecking on the props for this component
  propTypes:{
    name: React.PropTypes.string,
    question: React.PropTypes.string,
    answers: React.PropTypes.arrayOf(React.PropTypes.string),
    value: React.PropTypes.string
  },
   //returing the value that is selected via value.
   //could also be done via refs, but not best practice.
  getValue: function() {
    return this.state.value
  },
  // loging the the slected value when it there is a select event.
  handleChange: function (event) {
    this.props.onChange(this.props.name, event.target.value);
    //this.setState({value: event.target.value});
    console.log(event.target.value);
  },

  render: function() {
    //declaring this above becuase it won't be recognized unless it is declared above.
    var props = this.props;
    var thisName = this.props.name;
    // console.log(props);
    // console.log(thisName);
    var change = this.handleChange;

//looping through the answers
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

          {props.header}
        </div>
        <div className="row">
          <div className="small-12 medium-8 columns">
            <fieldset className="RadioSet">

              <legend>{props.question}</legend>
              
              <ul>{answerElements}</ul>

            </fieldset>
          </div>
        </div>
      </div>
    )
  }
});
