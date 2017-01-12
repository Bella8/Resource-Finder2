var QuestionForm = React.createClass({
  getValues: function() {
    // console.log(this.name);
    // return
    this.props.questions.map(function(q) {
    //   //declare array of values
    //   //loop over ref.  where getvalue !==undefined push to array and return array
    //   let values = []
    //   this.refs.
    console.log(q);
      // q.getValues();
    })
  },
  render: function() {
    var questionData = this.props.questions;
    var questions = questionData.map(function(e, i) {
      if (e.type === "select") {
        return (<SelectForm key={i} ref={e.name} name={e.name} header={e.header} answers={e.answers}/>)
      } else if (e.type ==="text") {
        return (<TextForm key={i} ref={e.name} name={e.name} header={e.header} />)
      }
    })
    return (<div>
      {questions}
    </div>)
  }
})
