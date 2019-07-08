import React from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import friends from './friends.json';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Docs: https://reactjs.org/docs/react-component.html
// 1.1 Refactor the `App` component: so that it's a class component.
/* Converting a Function to a Class:
() You can convert a function component like Clock to a class in five steps:
1) Create an ES6 class, with the same name, that extends React.Component.
2) Add a single empty method to it called render().
3) Move the body of the function into the render() method.
4) Replace props with this.props in the render() body.
5) Delete the remaining empty function declaration. */
class App extends React.Component {
  // 1.2 Set the component's initial `state` to the `friends` JSON array.
  state = {
    friends
  };

  // 2.1 Add functionality to the application so that when the red X icon on a `FriendCard` is clicked, that `FriendCard` is removed from the page. To accomplish this, you should define a method inside of `App` that follows this psuedocode:
  removeFriend = (id) => {
    // 1) Use `Array.filter` on `this.state.friends` to create a new array that has the friend matching the passed id removed
    const friends = this.state.friends.filter((friend) => friend.id !== id);
    // 2) Set this.state.friends equal to the new friends array
    this.setState({friends});
  };
  
  // Only method needed to be defined is React.Component subclass render()
  render () {
    // make sure to console log outside of return but in render
    console.log("-------------------------")
    console.log(this.state.friends)
    console.log("-------------------------")
    // 1.3 Inside of the `render` method, rather than rendering each `FriendCard` component manually, 
    // use a map to render one `FriendCard` component for each object in the `friends` JSON passing in the appropriate props.
      // Map over this.state.friends and render a FriendCard component for each friend object
    return (
      <div>

        <Navbar>
          <h1 className='title'>Click Game</h1>
        </Navbar>
        <Wrapper>
         {this.state.friends.map((friend) => (
           <FriendCard
          // key is used to set id on the JSX element.
          //  W/O it you get: "Warning: Each child in a list should have a unique 'key'"
          key={friend.id}
          // Below order matches friends.json object.
           id={friend.id}
           name={friend.name}
           image={friend.image}
           occupation={friend.occupation}
           location={friend.location}
           /*
          3. You'll want to pass this new `removeFriend` 
          method as a prop into each `FriendCard` component.
          */
          removeFriend={this.removeFriend}
           />
           ))};
           </Wrapper>
           <Footer>
           <h2 className="footer">2019</h2>
           </Footer>
      </div>
      )
    }
}

export default App
