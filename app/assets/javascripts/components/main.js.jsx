var Main = React.createClass({

  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();

    let values = this.getAllValues();
    // console.log(values);
    // $.ajax({
    //   url: "/api/v1/items.json",
    //   type: 'POST',
    //   data: {item:{ }}
    // });
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

  getAllValues: function() {
    return this.refs.questions.getValues();
    // return this.refs.questions.getValues();
  },

  render: function() {
    let questionData = [
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

    return(
      <div className="row">
        <Header/>
        <div className="small-12 small-centered medium-9 medium-centered columns ">
          <h5 className="text-center" id="form-header" >Please answer all the questions</h5>
          <form onSubmit={this.handleFormSubmit}>

            <div className="row column main-form">

              <QuestionForm questions={questionData} ref="questions"/>

              <input ref="answer"
    					type="submit"
    					className="btn btn-primary float-right"
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
