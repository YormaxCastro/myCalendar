export default function (state = {}, action) {

  switch (action.type) { // set all action here and return its payload  
    case "EVENT_SELECTED":
      return action.payload;
    case "SUBMIT_EVENT":
      return action.payload;
  }
  return state;

}