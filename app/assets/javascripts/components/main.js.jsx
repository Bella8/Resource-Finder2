var Main = React.createClass({

  handleFormSubmit: function (formSubmitEvent) {
  formSubmitEvent.preventDefault();
  var testtwo = this.refs.testmain.state;


  console.log('You have selected:', testtwo);
},

  render: function() {
    var answers = [	"Homeless/Live in a shelter",
    "transitional housing", "Renting", "Other"];
    var answersYN = [	"Yes",
    "No"];
    var answersThree = ["Employed","Underemployed", "Out of work – looking for work", "Out of work – not currently looking for work"]

    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <Question ref="testmain" question="Client current housing type?
          " answers = {answers} name= "questionOne"/>
        <input
          type="submit"
          className="btn btn-primary float-right"
          value="Submit"/>

        <button
          className="btn btn-link float-left"
          onClick={this.handleClearForm}>Clear form</button>
      </form>

    </div>
  )
}
});
