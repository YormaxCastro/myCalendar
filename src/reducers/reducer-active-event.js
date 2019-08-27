export default function (state = {}, action) {

  switch (action.type) { // set all action here and return its payload  
    case "EVENT_SELECTED":
      return action.payload;
    case "EVENT_SUBMITTED":
      console.log("IN the payload")
      //console.log(action.payload);
      return action.payload;
  }
  return state;


}