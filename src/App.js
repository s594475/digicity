import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './compontes/Header.js';
import Main from './compontes/Main.js';
class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
          <Header />
          <Main />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
