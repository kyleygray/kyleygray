import mitt, { Emitter } from "mitt";

type MyEvents = {
  navigate: string | null;
};

const EventBus: Emitter<MyEvents> = mitt();
export default EventBus;
