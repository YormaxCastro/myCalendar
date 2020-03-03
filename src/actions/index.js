export const selectEvent = (event) => {
  return {
    type: "EVENT_SELECTED",
    payload: event
  }
};

export const addEvent = (event) => {
  return {
    type: "ADD_EVENT",
    payload: event
  }
};

export const updateEvent = (event) => {
  return {
    type: "UPDATE_EVENT",
    payload: event
  }
};