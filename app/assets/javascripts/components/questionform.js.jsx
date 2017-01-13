var QuestionForm = React.createClass({
  // propTypes:{
  //   forms: React.PropTypes.arrayOf(React.PropTypes.string)
  // },

  getValues: function() {
    // console.log(this.name);
    // return
    let values = []

    for (var question in this.refs){
      // console.log(question, this.refs[question].getValue());

      values.push( question.getValue());
    }
    //   //declare array of values
    //   //loop over ref.  where getvalue !==undefined push to array and return array
    //   let values = []
    //   this.refs.
    // console.log(q.getValue());
    //
    return values

    //   //declare array of values
    //   //loop over ref.  where getvalue !==undefined push to array and return array
    //   let values = []
    //   this.refs.
    // console.log(q.getValue());
    //
    // return 1;
      // q.getValues();
    // })
  },

  render: function() {
    var questionData = this.props.questions;
    var onChange = this.props.onChange;
    var questions = questionData.map(function(e, i) {
      if (e.type === "select") {

        return (<SelectForm key={i} value={e.value} onChange={onChange} name={e.name} header={e.header} answers={e.answers}/>)
      } else if (e.type ==="text") {

        return (<TextForm key={i} onChange={onChange} value={this.value} name={e.name} header={e.header} />)
      }
    })
  //  this.props.forms = questions
    return (<div>
      {questions}
    </div>)
  }
})
