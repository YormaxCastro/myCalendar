export const selectEvent = (event) => {
  console.log("Event was selected : " + event.title);
  return {
    type: "EVENT_SELECTED",
    payload: event
  }
};
export const submitEvent = (allEvents, event, isNewAEvent) => {
  //console.log(allEvents);
  //console.log("in the submit Event");
  if (isNewAEvent)
    allEvents.push(event);
  else {
    allEvents.map(currEvent => {
      if (currEvent.id == event.id) {
        event.desc = "this Event was edited.";
      }
      console.log(currEvent);
    }
    );
  }
  console.log(allEvents);


  return {
    type: "EVENT_SUBMITTED",
    payload: allEvents
  }
};