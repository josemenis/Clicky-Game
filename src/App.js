import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import pictures from './friends.json';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';

class App extends React.Component {
  // state is keeping track of stuff based on Readme.
  state = {
    // score and topScore in navbar set to 0
    score: 0,
    topScore: 0,
    // images set to array
    images: []
  };

  componentDidMount() {
                  // key:value
    this.setState({images: pictures})
  };
  
  restart = () => {
    this.setState({score: 0})
    this.setState({topScore: 0})
  }
  
  //////////////////////////////////////////////////////////
              // = lets arrow function bind this bc ES7
  handleIMGClick = (event) => {
    // logic is to set to fail immediately
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
    if (event.target.dataset && event.target.dataset.isClicked) {
      this.setState({score: 0})
      // score is reset after an incorrect # of guesses, then restarted
      this.restart()
    } else {
      // increment and add dataValue= clicked when image is clicked 1st time
      this.setState({score: this.state.score + 1}) 
      // adds dataset set value true
      event.target.dataset.isClicked = true
    } 
    //---------------------------------------------
    // shuffle pictures everytime image is clicked
    // --------------------------------------------
  }
  /////////////////////////////////////////////////////////////

  // Only method needed to be defined is React.Component subclass render()
  render () {
    return (
      <div>
        <Navbar>
          <div className='title'>Navbar</div>
        </Navbar>
        <Header>
          <div className='title'>Header</div>
        </Header>
        <Container>
          {/* maps through each image */}
          {this.state.images.map(oneImage => (
            // pass properties to Card Component
            <Card
            id={oneImage.id}
            key={oneImage.id}
            image={oneImage.image}
            handleClick={this.handleIMGClick}
            />
          ))}
        </Container>
           <Footer>
           <h2 className="footer">2019</h2>
           </Footer>
      </div>
      )
    }
}

export default App
