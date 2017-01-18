var QuestionForm = React.createClass({

  getValues: function() {
    let values = []
    for (var question in this.refs){
      values.push( question.getValue());
    }
    return values
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
    return (<div>
      {questions}
    </div>)
  }
})
