var Main = React.createClass({

  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();
    // var testtwo = this.refs.radiovalueOne.state;
    // var testthree = this.refs.radiovalueTwo.state;
    // var caseid = this.refs.caseid.refs.inputtest.value;
    // // inputtest
    // // var input= this.state.value;
    // //   testtwo.value ="";
    // //  this.props.onSubmit(testtwo)
    //
    // console.log('You have selected:', testtwo, testthree);
    // console.log('input:', caseid);
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


    // var output = this.ref.map(function(name, index){
    //   return  key={ index }>{name};
      // console.log(key);
    // })
  },
  //loop through it and put it into a hash with key value.
  //Todo implement cler form.
  // handleClearForm: function (formCrearEvent){
  //   formCrearEvent.preventDefault();
  //   var clearform = this.refs.radiovalues.state="";
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
        header:"Client Case",
        type:"text"
      },
      {
        name:"housingtype",
        header:"Housing Type",
        type:"select",
        answers:["Transitional Housing", "Renting", "Other"]
      },
      {
        name:"domesticviolence",
        header:"Is client a victim of domestic violence?",
        type:"select",
        answers:["Yes","No"]
      }
    ]

    return(
      <div className="row">
        <div className="small-12 small-centered medium-9 medium-centered columns ">
          <form onSubmit={this.handleFormSubmit}>
            <h5 className="text-center">Please answer all the questions.</h5>

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
