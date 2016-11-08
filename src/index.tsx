import * as React from 'react';
import {render} from 'react-dom';
import {DataService} from './services/data-service';
import {VayStay} from './types';

class App extends React.Component<any, any> {
  dataService: DataService = new DataService();
  state: {items: VayStay[]}

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    this.dataService.loadData().then(results => {
      this.setState({ items: results.data });
    });
  }

  render () {
    return (
      <ul>
        {
          this.state && this.state.items.map(item => {
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>
    );
  }
}


render(<App/>, document.getElementById('root'));