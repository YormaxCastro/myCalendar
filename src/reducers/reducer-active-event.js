export default function (state = null, action) {

  switch (action.type) { // set all action here and return its payload 
    case "USER_SELECTED":
      return action.payload;
      break;
  }
  return state;


}