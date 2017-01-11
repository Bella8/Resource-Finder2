var Main = React.createClass({

  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();
    var testtwo = this.refs.radiovalues.state;
    var input=  this.refs.input.value;
    //   testtwo.value ="";
    //  this.props.onSubmit(testtwo)

    console.log('You have selected:', testtwo);
  },
  //Todo implement cler form.
  // handleClearForm: function (formCrearEvent){
  //   formCrearEvent.preventDefault();
  //   var clearform = this.refs.radiovalues.state="";
  //   console.log('this form has been clear', clearform)
  // },

  render: function() {
    var answers = [	"Homeless/Live in a shelter",
    "transitional housing", "Renting", "Other"];
    var answersYN = [	"Yes",
    "No"];
    var answersThree = ["Employed","Underemployed", "Out of work – looking for work", "Out of work – not currently looking for work"]

    return(
      <div className="row">
        <div className="small-12 small-centered medium-9 medium-centered columns ">
          <form onSubmit={this.handleFormSubmit}>
            <h5 className="text-center">Please answer all the questions.</h5>
            <div className="row column main-form">
              <TextForm question="Client Case:" />
              <TextForm question="Client zip code:
                " />
              <Question ref="radiovalues" question="Client current housing type?
                " answers = {answers} name= "questionFour"/>
              <Question ref="radiovalues" question="Is client a victim of domestic violence?
                " answers = {answersYN} name= "questionFive"/>
              <Question ref="radiovalues" question="Client employment status?
                " answers = {answersYN} name= "questionsix"/>
              <Question ref="radiovalues" question="Does client have health insurance?" answers = {answersYN} name= "questionseven"/>
              <Question ref="radiovalues" question="Does client recieve SNAP benefits?" answers = {answersYN} name= "questioneight"/>
              <Question ref="radiovalues" question="Does client have child (or children) under the age of 13?" answers = {answersYN} name= "questionnine"/>
              <a role="button" aria-label="submit form" href="#" className="button float-right">Submit</a>

              <button
                className="btn btn-link float-left"
                onClick={this.handleClearForm}>Clear form
              </button>
            </div>
          </form>
        </div>
      </div>      
    )
  }
});
