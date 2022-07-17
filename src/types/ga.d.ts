declare var ga: (
  eventName: string,
  options: {
    hitType: string;
    eventCategory?: string;
  }
) => void;

interface window {
  ga: (
    eventName: string,
    options: {
      hitType: string;
      eventCategory?: string;
    }
  ) => void;
}
