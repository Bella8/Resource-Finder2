var AllItems = React.createClass({
  getInitialState() {
    return { items: [] }
  },

  componentDidMount() {
    console.log('Component mounted');
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  },

  handleEdit() {

},

  // <p>Date of intake: {item.date}</p>
  // handleDelete={this.handleDelete.bind(this, item.id)}
  render() {
    var items= this.state.items.map((item) => {
      return (
        <div key={item.id}>
          <Item item={item}
                       handleEdit={this.handleEdit}/>
          <p><b>Case ID:</b> {item.caseid}</p>
          <p><b>Zip code:</b> {item.zip}</p>
          <p><b>Housing type:</b> {item.housing}</p>
          <p><b>Victim of domestic violence:</b> {String(item.dv)}</p>
          <p><b>Employment status:</b> {item.employment}</p><b>Have health insurance:</b>
          <p>{String(item.insurance)}</p>
          <p><b>Receive SNAP benefits:</b> {String(item.snap)}</p>
          <p><b>Have Child (or children):</b> {String(item.child)}</p>
            <button onClick={this.handleEdit()}> Edit </button>
          <br/>
          <br/>
        </div> )
      });
      return(
        <div>
          {items}
        </div>
      )
    }
  });
