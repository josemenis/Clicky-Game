import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import data from './friends.json';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import _ from 'lodash';


class App extends React.Component {

state = {
    data, // this is json file with all the images that you are importing
    score: 0, // current user score
    topScore: 0 // top score
  };

  componentDidMount() {
    console.log('======= called did mount ======= ');
    
    // console.log(this.state.data)
    // Everytime the component mounts we want to update the state.data object
    // so that state.data is this.state.data shuffled. So it should call your shuffle function
    // this.shuffle(this.state.data);
    this.resetGame(this.state.data)
  }
            // passing array, this.state.data
  resetGame = (data) => {
    console.log("reset game")
  // This function should do the following:
  console.log(this.state.data)
  console.log(data)
  
  // map through data and for each item in the array reset the clicked to false. Make sure to store the
  // full results of the map to a temp variable.
  let temp= this.state.data.map(eachItem => (
    {...eachItem, isClicked: false}
    ));

  console.log('------------ Temp ---------------')

    
    console.log(temp);
    
    // reset the state.score to 0.
    // update the state and set data equal to the temp variable shuffled.
    this.setState({
      data: temp,
      score: 0
    })

  console.log('------------ after setState ---------------')

  console.log(this.state.data)

  
  };

  //
  shuffle = (mydata) => {
    console.log('$$$$$$$$$ shuffle ccalled $$$$$$$$$$$');
    
    let temp= mydata.map(eachItem => (
      <Card 
      id={eachItem.id}
      key={eachItem.id}
      image={eachItem.image}
                  // this Card to use this onClick function
      handleClick={this.handleItemClick}
      />
      ));
      // console.log(temp)
    // https://github.com/lodash/lodash/blob/4ea8c2ec249be046a0f4ae32539d652194caf74f/shuffle.js
     return  _.shuffle(temp)
    
    // shuffle the data array
    // personally I would use this function. DO NOT REINVENT THE WHEEL HERE. 
	  // Just make sure you leave this
    // link in so we know you grabbed it from somewhere
    // https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
  };

  handleItemClick = (event) => {
    // you'll want to set up a utility variable called isFirstClick and set it to false
    let firstClick = false
    // You'll create a copy of your state data by mapping through this.state.data
    // for each item create a copy of the object then check to see if that objects id is equal to the
    // id that was passed into the handleClick function. If the ids match, you should check to see if the
    // objects clicked property is false. If it's false then set it to true and also set isFirstClick to true.
    // Remember that you have to return from the map function to have it save into your copy of the data object
   let id = event.target.id
  //  console.log(id)
  //  console.log(this.state.data[id])
  // console.log(typeof id) // returns string
  let upDateData = this.state.data.map(element => {
    //console.log(typeof element.id) // retursn number

        if (element.id === parseInt(id)) {

          if(element.isClicked === false){
            // User got a point
            firstClick = true
          }
          
          if(firstClick){
            // update score
            let newScore= this.state.score + 1
            let newTopScore= Math.max(newScore, this.state.topScore)
            this.setState({score: newScore, topScore: newTopScore })
            

            return {...element, isClicked: true}
          }
          else{
            //gameover
            this.resetGame()
          }

        }

        return {...element}


    // if (element.id === parseInt(id) && element.isClicked === false) {
    //   console.log(element.name)
    //   // increment score & topscore
    //   // Math.max
    //   return {...element, isClicked: true}
    //   // Using spread operator same as return below. 
    //   // return {
    //   //   "id": element.id,
    //   //   "name": element.name,
    //   //   "image": element.image,
    //   //   "isClicked": true
    //   // }
    // } // end of if
    // else if (element.id === parseInt(id) && element.isClicked === true) {
    //   // gameover
    //   this.resetGame(this.state.data)
    // } else {
    //   return {...element}
    // }
 }) // end of map

  this.setState({data: upDateData})
  // console.log(this.state.data)
    // Now we If the image has never been clicked, so
    // * If isFirstClick === true then
    // you want to increment the score and you want to set top score equal to whichever is greater score or current top score
    // to do this check out this Math method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

    // * If isFirstClick === false then
    // we wantmto call the resetGame function
  

  };
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
          {this.shuffle(this.state.data)}
        </Container>
           <Footer>
           <h2 className="footer">2019</h2>
           </Footer>
      </div>
      )
    }
}

export default App



