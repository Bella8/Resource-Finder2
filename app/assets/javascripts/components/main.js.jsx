var questionData = [
  {
    name:"clientcase",
    header:"Client Client ID",
    type:"text",
    placeholder: "Case ID"
  },
  {
    name:"zip",
    header:"Client zip code",
    type:"text",
    placeholder: "zip"
  },
  {
    name:"Homeless Services",
    header:"Housing Type",
    type:"select",
    answers:["Homeless", "Emergency shelter", "Transitional Housing", "Renting", "Other"]
  },
  {
    name:"Domestic Violence",
    header:"Is client a victim of domestic violence?",
    type:"select",
    answers:["Yes","No"]
  },
  {
    name:"Workforce Services",
    header:"Client employment status?",
    type:"select",
    answers:["Employed", "Underemployed", "Out of work – looking for work", "Out of work – not currently looking for work"]
  },
  {
    name:"healthinsurance",
    header:"Does client have health insurance?",
    type:"select",
    answers:["Yes","No"]
  },
  {
    name:"SNAPbenefits",
    header:"Does client recieve SNAP benefits?",
    type:"select",
    answers:["Yes","No"]
  },
  {
    name:"children",
    header:"9. Does client have child (or children) under the age of 13?",
    type:"select",
    answers:["Yes","No"]
  }
]

var Main = React.createClass({

  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();

    // console.log(this.state.questions);
      console.log("this is submitted info", this.state);
    // console.log(values);
    $.ajax({
      url: "/api/v1/items.json",
      type: 'POST',
      data: {item:{"housing": "Homeless"}}
    });
    // let strVal = JSON.stringify(values)
    // //send to url
    // let url = "/api/v1/items.json"

  },
  //loop through it and put it into a hash with key value.
  // TODO:  implement cler form.
  // handleClearForm: function (formCrearEvent){
  //   formCrearEvent.preventDefault();
  //   var clearform = this.setState({value: null})
  //   console.log('this form has been clear', clearform)
  // },
  //
  // getAllValues: function() {
  //   return this.refs.questions.getValues();
  //   // return this.refs.questions.getValues();
  // },

  getInitialState: function() {
    let questions = {};
    questionData.map(function(question) {
      questions[question.name] = question;
    })
    return {
      questions: questions,
    };
  },

  onQuestionFormChange: function(question, answer) {
    let questions = this.state.questions;
    questions[question].answer = answer;
    this.setState({ questions: questions });
  },

  onQuestionFormSubmit: function() {
    let questions = Object.values(this.state.questions);
    console.log(questions);
    let answers = questions.map(function(question) {
      // let questionForm = question.header
      // let questionAnswer =  question.answers
      // return question.header
      //  question.answers;
      return question.answer
    })
    console.log('answers:', answers);

  },

  render: function() {
    return(
      <div className="row">
        <Header/>
        <div className="small-12 small-centered medium-9 medium-centered columns ">
          <h5 className="text-center" id="form-header" >Please answer all the questions</h5>
          <form onSubmit={this.handleFormSubmit}>

            <div className="row column main-form">

              <QuestionForm questions={Object.values(this.state.questions)}
                onChange={this.onQuestionFormChange} ref="questions"/>

              <input ref="answer"
    					type="submit"
    					className="btn btn-primary float-right"
              onClick={this.onQuestionFormSubmit}
    					value="Submit"/>

              <button
                className="btn btn-link float-left"
                onClick={this.handleClearForm}>Clear form
              </button>
            </div>
          </form>
        </div>
        <Body />
      </div>
    )
  }
});
