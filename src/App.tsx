import React from 'react'
import AppContainer from './AppContainer';
import WikiBrands from './WikiBrands';
import WikiParser from './WikiParser';

class App extends React.Component {
  componentDidMount(): void {
    const parser = new WikiParser();
    const nodeList = document.querySelectorAll('.div-col > ul > li');
    console.log(parser.parse(
      nodeList as NodeListOf<HTMLLIElement>
    ));
  }
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