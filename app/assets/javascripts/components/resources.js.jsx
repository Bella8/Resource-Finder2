var Resources = React.createClass({
  getInitialState: function() {
    return { data: this.props.initialData };
  },
  render: function() {
    var questions = this.state.data.map(function(e, i) {
      return(
          <div key={i} className="column agencies">
            < CheckboxInput />
            <ul>
              <li><b>{e.agency }</b></li>
              <li>{e.division }</li>
              <li>{e.program_model }</li>
              <li>{e.site_name }</li>
              <li>{e.phone_number }</li>
            </ul>
          </div>
      )
    });
    return(
    <div>
      <div className="row small-up-1 medium-up-4 large-up-5">{questions}</div>
</div>
  )
  }
});
