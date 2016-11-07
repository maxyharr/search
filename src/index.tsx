import * as React from 'react';
import {render} from 'react-dom';

class App extends React.Component<any, any> {
  render () {
    return <p>Stuff</p>;
  }
}

render(<App/>, document.getElementById('root'));