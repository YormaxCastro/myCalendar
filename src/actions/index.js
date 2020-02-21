export const selectEvent = (event) => {
  return {
    type: "EVENT_SELECTED",
    payload: event
  }
};
export const submitEvent = (event) => {
  return {
    type: "SUBMIT_EVENT",
    payload: event
  }
};