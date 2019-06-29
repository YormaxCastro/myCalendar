export const selectEvent = (event) => {
  console.log("Event was selected : " + event.title);
  return {
    type: "EVENT_SELECTED",
    payload: event
  }
};