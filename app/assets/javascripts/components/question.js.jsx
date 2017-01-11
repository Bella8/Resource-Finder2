var Question = React.createClass({
  propTypes:{
    name: React.PropTypes.string,
    question: React.PropTypes.string,
    answers: React.PropTypes.arrayOf(React.PropTypes.string),
    value: React.PropTypes.string
  },

  handleChange: function (event) {
      this.setState({value: event.target.value});
      console.log(event.target.value);
    },

  render: function() {
    var props = this.props;
    var change = this.handleChange;

    var answerElements = this.props.answers.map(function(answer, i){
      return(

        <li key={i}><input  onClick={change} type="radio" name={props.name} value={answer} ref="test" id={i}  /> <label>{answer}</label></li>

        )
      });

      return(
       <fieldset className="RadioSet">
          <legend>{this.props.question}</legend>
          <ul>{answerElements}</ul>
        </fieldset>
      )
    }
  });
