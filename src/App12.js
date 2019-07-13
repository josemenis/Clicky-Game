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
    // ({event.target.dataset.isClicked: undefined});
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
      // this.element.removeAttribute(isClicked);
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


state = {
  data, // this is json file with all the images that you are importing
  score: 0, // current user score
  topScore: 0 // top score
};

componentDidMount() {
  // Everytime the component mounts we want to update the state.data object
  // so that state.data is this.state.data shuffled. So it should call your shuffle function
}

resetGame = (data) => {
// This function should do the following:
// reset the state.score to 0.
// map through data and for each item in the array reset the clicked to false. Make sure to store the
// full results of the map to a temp variable.
// update the state and set data equal to the temp variable shuffled.
//

};

//
shuffle = (data) => {
  // shuffle the data array
  // personally I would use this function. DO NOT REINVENT THE WHEEL HERE. 
// Just make sure you leave this
  // link in so we know you grabbed it from somewhere
  // https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
};

handleItemClick = (id) => {
  // you'll want to set up a utility variable called isFirstClick and set it to false
  // You'll create a copy of your state data by mapping through this.state.data
  // for each item create a copy of the object then check to see if that objects id is equal to the
  // id that was passed into the handleClick function. If the ids match, you should check to see if the
  // objects clicked property is false. If it's false then set it to true and also set isFirstClick to true.
  // Remember that you have to return from the map function to have it save into your copy of the data object
  let isFirstClick = false;

  // Now we If the image has never been clicked, so
  // * If isFirstClick === true then
  // you want to increment the score and you want to set top score equal to whichever is greater score or current top score
  // to do this check out this Math method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

  // * If isFirstClick === false then
  // we wantmto call the resetGame function

};
Collapse



