import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import data from './friends.json';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';

class App extends React.Component {

state = {
    data, // this is json file with all the images that you are importing
    score: 0, // current user score
    topScore: 0 // top score
  };

  componentDidMount() {
    console.log('======= called did mount ======= ');

    // console.log(this.state.data)
    this.setState({
      data: this.shuffle(this.state.data)
    });
  }
            // passing array, this.state.data
  resetGame = (data) => {
  console.log("reset game")  

  let temp= this.state.data.map(eachItem => (
    {...eachItem, isClicked: false}
    ));

  console.log('------------ Temp ---------------')
  console.log(temp);
    
    this.setState({
      data: this.shuffle(temp),
      score: 0
    })

  console.log('------------ after setState ---------------')
  console.log(this.state.data)
  };

  // https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
  shuffle = (array) => {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  
  };
  

  handleItemClick = (event) => {
    let firstClick = false
   let id = event.target.id

  let upDateData = this.state.data.map(element => {
        let tempImg = {...element}

                          // returns a string so parsed id
        if (tempImg.id === parseInt(id)) {

          if(!tempImg.isClicked){
            firstClick = true
            tempImg.isClicked = true
          }
        }
        return tempImg
      });
          console.log(upDateData);

          if(firstClick === true){
            // User gets a point
            let newScore= this.state.score + 1
            // Math method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
            let newTopScore= Math.max(newScore, this.state.topScore)
            this.setState({data: this.shuffle(upDateData), score: newScore, topScore: newTopScore })
                      }
          else{
            //gameover
            this.resetGame()
          }
     }
  
  render () {
    return (
      <div>
        <Navbar>
          <div className='title'>
          Clicky Game
          <br/>
          Top Score= {this.state.topScore}
          <br/>
          Score= {this.state.score}
          </div>
        </Navbar>
        <Header>
          <h1 className='title'>Here We Go</h1>
        </Header>
        <Container>
         {this.state.data.map(oneImage => (
            // pass properties to Card Component
            <Card
            id={oneImage.id}
            key={oneImage.id}
            image={oneImage.image}
            handleClick={this.handleItemClick}
            />
          ))}
        </Container>
           <Footer>
           <h2 className="footer">July 2019</h2>
           </Footer>
      </div>
      )
    }
}

export default App


