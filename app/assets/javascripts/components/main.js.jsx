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
    // console.log(this.refs);
    // var output = this.ref.map(function(key, value){
    //   console.log(key, value);
    // )},
  },


  //loop through it and put it into a hash with key value.
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

                <TextForm ref="caseid" placeholder='Case Id' question="Client Case:"/>

              <Question ref="radiovalueOne" question="Client current housing type?
                " answers = {answers} name= "questionFour"/>

              <Question ref="radiovalueTwo" question="Is client a victim of domestic violence?
                " answers = {answersYN} name= "questionFive"/>

                <input
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
