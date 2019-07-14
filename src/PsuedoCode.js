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