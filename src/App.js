import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import friends from './friends.json';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';

// Docs: https://reactjs.org/docs/react-component.html
class App extends React.Component {
  // 1.2 Set the component's initial `state` to the `friends` JSON array.
  // state is keeping track of stuff
  state = {
    score: 0,
    
  };

  // add event handler here
  // keep track of state of image className = clicked, pupster
  // conditional if the img. has been clicked reset score, restart
  // if not clicked increment score, shuffle cards in random order 

  //////////////////////////////////////////////////////////
  // PSEUDO CODE:
  randomFriend() {
    // how do I make pictures randomly select?
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
          <Card>Card</Card>
        </Container>
           <Footer>
           <h2 className="footer">2019</h2>
           </Footer>
      </div>
      )
    }
}

export default App
