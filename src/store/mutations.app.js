
let mutations = {
  SET_APP_USER_DATA(state, value) {
    state.appUserData = value;
  },
  SET_CURRENT_ROUTINE(state, value) {
    state.currentRoutine = value.data;
    state.currentRoutineIndex = value.index;
  },
  SET_CURRENT_ACTIVITY(state, value) {
    state.currentActivity = value.data;
    state.currentActivityIndex = value.index;
  }
}
export default mutations;