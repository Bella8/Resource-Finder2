var questionData = [
  {
    name:"clientcase",
    header:"Client ID",
    type:"text",
    placeholder: "Case ID",
    key: "caseid"
  },
  {
    name:"zip",
    header:"Client zip code *Chicago",
    type:"text",
    placeholder: "Zipcode",
    key:"zip"
  },
  {
    name:"Homeless Services",
    header:"Housing Type",
    type:"select",
    answers:["Homeless", "Emergency shelter", "Transitional Housing", "Renting", "Other"],
    key: "housing"
  },
  {
    name:"Domestic Violence",
    header:"Is client a victim of domestic violence?",
    type:"select",
    answers:["Yes","No"],
    key: "dv"
  },
  {
    name:"Workforce Services",
    header:"Client employment status?",
    type:"select",
    answers:["Employed", "Underemployed", "Out of work – looking for work", "Out of work – not currently looking for work"],
    key: "employment"
  },
  {
    name:"healthinsurance",
    header:"Does client have health insurance?",
    type:"select",
    answers:["Yes","No"],
    key: "insurance"
  },
  {
    name:"SNAPbenefits",
    header:"Does client recieve SNAP benefits?",
    type:"select",
    answers:["Yes","No"],
    key: "snap"
  },
  {
    name:"children",
    header:"9. Does client have child (or children) under the age of 13?",
    type:"select",
    answers:["Yes","No"],
    key: "child"
  }
]

var Form = React.createClass({

  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();

    let questions = Object.values(this.state.questions);

    let data = {};
    this.answers = questions.map(function(question) {
      data[question.key] = question.answer
    })
    let onSubmit = this.props.onSubmit
    $.ajax({
      url: "/api/v1/items.json",
      type: 'POST',
      data: {item: data},
      success: (item) => {
        onSubmit(item)
      }
    });

  },

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

  render: function() {
    return(
      <div className="row">

        <div className="small-12 small-centered medium-9 medium-centered columns ">
          <h5 className="text-center" id="form-header" >Please answer all the questions</h5>
          <form onSubmit={this.handleFormSubmit} className="questionnaire-form">

            <div className="row column main-form">

              <QuestionForm questions={Object.values(this.state.questions)}
                onChange={this.onQuestionFormChange} ref="questions"/>

              <input ref="answer"
                type="submit"
                className="btn btn-primary float-right search button"
                onClick={this.onQuestionFormSubmit}
                value="Submit"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
});
