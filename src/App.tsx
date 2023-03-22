import React from 'react'
import AppContainer from './AppContainer';
import WikiBrands from './WikiBrands';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app" >
        <WikiBrands />
        <AppContainer />
      </div>
    );
  }
}

export default App;