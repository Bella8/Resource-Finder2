var Item = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="small-12  medium-7 large-7 smaill-centered medium-centered large-centered columns client-info">
          <p><b>Case ID:</b> {this.props.item.caseid}</p>
          <p><b>Zip code:</b> {this.props.item.zip}</p>
          <p><b>Housing type:</b> {this.props.item.housing}</p>
          <p><b>Victim of domestic violence:</b>  {String(this.props.item.dv)}</p>
          <p><b>Employment status:</b> {this.props.item.employment}</p>
          <p><b>Have health insurance:</b>
          {String(this.props.item.insurance)}</p>
        <p><b>Receive SNAP benefits:</b> {String(this.props.item.snap)}</p>
        <p><b>Have Child (or children):</b>  {String(this.props.item.child)}</p>
      </div>
    </div>
  )
}
});
