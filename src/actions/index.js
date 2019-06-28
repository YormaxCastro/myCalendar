export const selectEvent = (event) => {
  console.log("Event was click : " + event.title);
  return {
    type: "EVENT_SELECTED",
    payload: event
  }
};