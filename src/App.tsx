import React from 'react'
import AppContainer from './AppContainer';
import WikiBrands from './WikiBrands';
import WikiParser from './WikiParser';

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