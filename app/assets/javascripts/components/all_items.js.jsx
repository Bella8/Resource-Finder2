var AllItems = React.createClass({
  getInitialState() {
    return { items: [] }
  },

  componentDidMount() {
    console.log('Component mounted');
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  },

  render() {
    var items= this.state.items.map((item) => {
      return (
        <div key={item.id}>
          <p>{item.date}</p>
          <p>{item.caseid}</p>
          <p>{item.zip}</p>
          <p>{item.housing}</p>
          <p>{item.employment}</p>
          <p>{item.insurance}</p>
          <p>{item.snap}</p>
          <p>{item.child}</p>
        </div> )
      });
      return(
        <div>
          {items}
        </div>
      )
    }
  });
