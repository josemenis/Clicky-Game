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
    // completely reset image so I can click it
    this.setState({isClicked:''})

  }
  // https://en.wikipedia.org/wiki/Semantics_(computer_science) DON'T GET CAUGHT IN THIS
  //////////////////////////////////////////////////////////
              // = lets arrow function bind this bc ES7
  handleIMGClick = (event) => {
    console.log("!!!!!!!!!!!!!!!!!!!1")
    console.log(event.target)
    // logic is to set to fail immediately
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
    // checks for event then target element checks for dataset then checks if it's clicked
    if (event.target.dataset && event.target.dataset.isClicked) {
      this.setState({score: 0})
      // score is reset after an incorrect # of guesses, then restarted
      this.restart()
    } else {
      // increment and add dataValue= clicked when image is clicked 1st time
      this.setState({score: this.state.score + 1})
      this.setState({topScore: this.state.topScore + 1}) 
      // adds dataset set value true
      event.target.dataset.isClicked = true
      // shuffle pictures everytime image is clicked
    } 
    if (this.isClicked = true) {
      // Math.floor(1 + Math.random() * 16)
    }
    console.log(event.target.dataset)
  }
  /////////////////////////////////////////////////////////////

  // Only method needed to be defined is React.Component subclass render()
  render () {
    return (
      <div>
        <Navbar>
          <div className='title'>
          Navbar
          <br/>
          topScore= {this.state.topScore}
          <br/>
          score= {this.state.score}
          </div>
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
