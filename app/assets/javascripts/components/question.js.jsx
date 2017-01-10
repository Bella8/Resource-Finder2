var Question = React.createClass({
  propTypes:{
    name: React.PropTypes.string,
    question: React.PropTypes.string,
    answers: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  render() {
    var props = this.props;
    var answerElements = this.props.answers.map(function(answer, i){
      return(

        <li key={i}><input type="radio" name={props.name} value="" id={i}  /> <label>{answer}</label></li>

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
