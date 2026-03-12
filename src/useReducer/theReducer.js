function handelCounter(theCount, action) {
  const type = action.type;

  if (type === "add") {
    return theCount + 1;
  } else if (type === "sub") {
    return theCount - 1;
  } else {
    return theCount;
  }
}
export default handelCounter;

// handelCounter: A pure function that determines how the state should change based on the action.
// It takes the current state and an action as arguments and returns the new state.

function handelText(text, action) {
  const payload = action.payload;

  if (payload > 10) {
    return "more than 10";
  } else {
    return "less than 10";
  }
}
export { handelText };
