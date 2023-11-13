import ReactGA from "react-ga";

export const analyticsEventTracker = (category = "Unknown") => {
  const eventTracker = (action = "Unknown", label = "Unknown") => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
