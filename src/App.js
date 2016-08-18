import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './compontes/Header.js';
import Main from './compontes/Main.js';
import Footer from './compontes/Footer.js';
class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
          <Header />
          <Main />
          <Footer />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
