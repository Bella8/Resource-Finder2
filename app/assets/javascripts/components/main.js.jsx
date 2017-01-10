var Main = React.createClass({
  render() {
    var answers = [	"Homeless/Live in a shelter",
     "transitional housing", "Renting", "Other"];

    return(
      <div>
        <Header />
        <form><Question question="Client current housing type?
          " answers = {answers} name= "questionOne"/></form>

      </div>
    )
  }
});
