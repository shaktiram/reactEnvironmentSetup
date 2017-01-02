import React from 'react';
import Header from './components/Header.jsx';

//export default () => <h1>Hello World!!!</h1>;


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <h4>Hi Folks</h4>
      </div>
    );
  }
}
