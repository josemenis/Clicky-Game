import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import pictures from './friends.json';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';

class App extends React.Component {
  // state is keeping track of stuff based on Readme. So setState only affects state.
  state = {
    // score and topScore in navbar set to 0
    score: 0,
    topScore: 0,
    // images set to array
    images: [],
    data: []
  };

  componentDidMount() {
                  // key:value
    this.setState({images: pictures})
  };
  
  restart = () => {
    this.setState({score: 0})
    //----------------------------------------------
    // trying reset images state so I can click it and increment score after reset
    ({event.target.dataset.isClicked: undefined});
    //----------------------------------------------
  }

  // ------------------------
  // function getRandomImg(i) {
  //   return Math.floor(Math.random() * Math.floor(i));
  // }
  // -----------------------
  // https://en.wikipedia.org/wiki/Semantics_(computer_science) DON'T GET CAUGHT IN THIS
  //////////////////////////////////////////////////////////
              // = lets arrow function bind this bc ES7
  handleIMGClick = (event) => {
    //------------------------------------
    console.log("!!!!!!ClickImg event.target!!!!!!!")
    console.log(event.target)
    //------------------------------------
    // logic is to set to fail immediately
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
    // checks for event then target element checks for dataset then checks if it's clicked
    if (event.target.dataset && event.target.dataset.isClicked) {
      // score is reset after an incorrect # of guesses, then restarted
      this.restart()
      this.element.removeAttribute(isClicked);
    } else {
      // increment and add dataValue= clicked when image is clicked 1st time
      this.setState({score: this.state.score + 1})
      this.setState({topScore: this.state.topScore + 1}) 
      // adds dataset set value true
      event.target.dataset.isClicked = true
    } 
    //---------------------------------------------------
    // getRandomImg()
    //---------------------------------------------------
  }

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
