export const selectEvent = (event) => {
  console.log("Event was selected : " + event.title);
  return {
    type: "EVENT_SELECTED",
    payload: event
  }
};
export const submitEvent = (allEvents, event) => {
  console.log(allEvents);
  console.log("in the submit Event");

  return {
    type: "EVENT_SUBMITTED",
    payload: event
  }
};