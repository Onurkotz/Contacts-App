export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};


/// Please note that we have throttled the function calls here. This is because if your state is updated many times within a second, localStorage will be updated too many time. To avoid this install lodash. Here, we have throttled the function calls to 1 sec so that saveState is called only once per second.